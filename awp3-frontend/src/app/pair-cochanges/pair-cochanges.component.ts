import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ApiService} from "../services/api.service";
import {Cochange} from "../Cochange";
Chart.register(...registerables);


@Component({
  selector: 'app-pair-cochanges',
  templateUrl: './pair-cochanges.component.html',
  styleUrls: ['./pair-cochanges.component.css']
})
export class PairCochangesComponent implements AfterViewInit, OnInit{
  f1Value: string = '';
  f2Value: string = '';
  cochanges: Cochange[] = [];
  chart: Chart | null = null;
  constructor(private api: ApiService) {
  }
  ngAfterViewInit(): void {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'],
        datasets: [{
          label: 'Cochanges probability',
          type: 'line',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: [50, 60, 70, 180, 190, 200],
        }, {
          label: 'Cumulative cochanges',
          type: 'bar',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [200, 185, 590, 621, 250, 400],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  onF1Selected(value: string) {
    this.f1Value = value;
  }

  onF2Selected(value: string) {
    this.f2Value = value;
  }

  getPairCochanges() {
    if (this.f1Value && this.f2Value) {
      this.api.getCochangesFromPair(this.f1Value, this.f2Value).subscribe(cochanges => {
        const cumulativeCochanges = cochanges.map(cochange => cochange.cumulativeCochanges);
        const cumulativeCochangesP = cochanges.map(cochange => cochange.cumulativeCochangesP*100);
        const when = cochanges.map(cochange => cochange.when);
        console.log(cochanges)
        this.updateChart(cumulativeCochanges, cumulativeCochangesP, when);
      });
    }
  }
  ngOnInit(): void {

    //
  }

  updateChart(cumulativeCochanges: number[], cumulativeCochangesP: number[], when: string[]) {
    this.chart?.destroy();
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: when,
        datasets: [{
          label: 'Cumulative Cochange %',
          type: 'line',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: cumulativeCochangesP,
        }, {
          label: 'Cumulative Cochanges',
          type: 'bar',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: cumulativeCochanges,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}

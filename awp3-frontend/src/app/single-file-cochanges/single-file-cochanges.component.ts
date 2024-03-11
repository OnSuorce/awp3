import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import { Chart, registerables } from 'chart.js';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import numbers = _default.defaults.animations.numbers;
Chart.register(...registerables);

@Component({
  selector: 'app-single-file-cochanges',
  templateUrl: './single-file-cochanges.component.html',
  styleUrls: ['./single-file-cochanges.component.css']
})
export class SingleFileCochangesComponent implements  AfterViewInit, OnInit{
  defaultDate = new Date('2024-01-01');
  private f1Value: string = '';
  private radarChart: Chart | null = null;
  f2Values: string[] = [];
  cumulativeCochangePValues: number[] = [];
  constructor(private api: ApiService) {
  }

  onF1Selected(value: string) {
      this.f1Value = value;
  }

  getCochangesOfFile() {
    if (this.f1Value && this.defaultDate) {
       let date: string = this.formatDate(this.defaultDate)
      this.api.getCochangesFromSingleFile(this.f1Value, date).subscribe(cochanges => {
        this.f2Values = cochanges.map(cochange => cochange.f2);
        this.cumulativeCochangePValues = cochanges.map(cochange => cochange.cumulativeCochangesP * 100);
        console.log(cochanges)
        this.radarChart?.destroy()
        this.createRadarChart(this.cumulativeCochangePValues, this.f2Values)
      });


    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();


    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  ngAfterViewInit(): void {
  }

  createRadarChart(numbers: number[], lb: string[]): void {
    this.radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: lb,
        datasets: [{
          label: 'Cumulative cochanges %',
          data: numbers,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.defaultDate = new Date('2024-01-01');
  }
}

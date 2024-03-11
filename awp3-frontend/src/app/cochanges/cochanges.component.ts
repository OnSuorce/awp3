import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Chart, ChartType, registerables} from "chart.js";
Chart.register(...registerables);

@Component({
  selector: 'app-cochanges',
  templateUrl: './cochanges.component.html',
  styleUrls: ['./cochanges.component.css']
})
export class CochangesComponent {
  defaultDate = new Date('2024-01-01');
  private barChart: Chart | null = null;
  private fValues: string[] = [];
  private cumulativeCochangePValues: number[] = [];

  constructor(private api: ApiService) {
  }

  createBarChart(fValues: string[], cumulativeCochangePValues: number[]): void {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: fValues,
        datasets: [{
          label: 'Cumulative Cochange P',
          data: cumulativeCochangePValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
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

  getCochanges() {
    this.api.getCochanges(this.formatDate(this.defaultDate)).subscribe(cochanges =>{
      this.fValues = cochanges.map(cochange => cochange.f1 + " " +cochange.f2);
      this.cumulativeCochangePValues = cochanges.map(cochange => cochange.cumulativeCochangesP * 100);
      console.log(cochanges)
      this.barChart?.destroy()
      this.createBarChart( this.fValues, this.cumulativeCochangePValues)
    })

  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();


    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();

    return `${year}-${formattedMonth}-${formattedDay}`;
  }
}

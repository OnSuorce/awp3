import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  constructor(private router: Router){

  }

  ngAfterViewInit(): void {
    const comboChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno'],
        datasets: [{
          label: 'Vendite',
          type: 'line',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: [50, 60, 70, 180, 190, 200],
        }, {
          label: 'Visitatori',
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
}

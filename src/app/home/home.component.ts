import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DatabaseService } from '../database.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	charts = [];
	charts1 = [];
	charts2 = [];
	businessArray;
	icon: any;
	totalSpaza = 0;
    totalGarage = 0;
    totalOutlets = 0;

	constructor(public database: DatabaseService) {
		this.BasicChart();
	}

	ngOnInit() {
		this.database.getBusinesses().then((data: any) => {
            console.log(data);
            for(var i = 0; i < data.length;i++){
                this.totalOutlets = i + 1
                console.log(this.totalOutlets)
                this.businessArray = data;
			this.icon = this.businessArray[i].icon;
			if (this.icon == 'spaza') {
                this.totalSpaza = this.totalSpaza + 1;
                console.log(this.totalSpaza)
            }
            else{
                this.totalGarage = this.totalGarage + 1
                console.log(this.totalGarage)
            }
            }
			
		});
		this.charts = new Chart('chart', {
			type: 'doughnut',
			data: {
				labels: [ 'Local Business', 'Garage', 'All Outlets' ],
				datasets: [
					{
						label: [ 'Local Business', 'Garage', 'All Outlets' ],
						data: [ 16, 7, 32 ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 2
					}
				]
			},
			options: {
				responsive: 'true',

				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});

		this.charts1 = new Chart('chart1', {
			type: 'pie',
			data: {
				labels: [ 'Local Business', 'Garage', 'All Outlets' ],
				datasets: [
					{
						label: [ 'Local Business', 'Garage', 'All Outlets' ],
						data: [ 16, 7, 32 ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 2
					}
				]
			},
			options: {
				responsive: true,

				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});

		this.charts2 = new Chart('chart2', {
			type: 'line',
			data: {
				labels: [ 'Local Business', 'Garage', 'All Outlets' ],
				datasets: [
					{
						label: [ 'Local Business', 'Garage', 'All Outlets' ],
						data: [ 16, 7, 32 ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 2
					}
				]
			},
			options: {
				responsive: 'true',

				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});
	}

	BasicChart() {}
}

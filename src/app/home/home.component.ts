import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DatabaseService } from '../database.service';
import * as firebase from 'firebase'
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	totalUsers = 0;
	usersArray = new Array();
	charts = [];
	charts1 = [];
	charts2 = [];
	businessArray = new Array();
	AllbusinessArray = new Array();
	icon: any;
	totalSpaza = 0;
	totalGarage = 0;
	totalOutlets = 0;

	constructor(public database: DatabaseService) {
		this.BasicChart();
	}

	ngOnInit() {

		firebase.database().ref('userdb/').on('value', (data: any) => {
			var businesses = data.val();
			console.log(businesses);
			var key = Object.keys(businesses);
			for (var x = 0; x < key.length; x++) {
				var k = key[x];
				this.totalOutlets = x + 1
				console.log(this.totalOutlets)
				console.log(k)
				let obj = {
					address: businesses[k].address,
					diesel: businesses[k].diesel,
					email: businesses[k].email,
					gas: businesses[k].gas,
					icon: businesses[k].icon,
					lat: businesses[k].lat,
					lng: businesses[k].lng,
					name: businesses[k].name,
					owner: businesses[k].owner,
					petrol93: businesses[k].petrol93,
					petrol95: businesses[k].petrol95,
					tel: businesses[k].tel,
					uid: businesses[k].uid,
				}
				console.log(obj)
				this.AllbusinessArray.push(obj)
				console.log(this.AllbusinessArray[x].icon);
				if (this.AllbusinessArray[x].icon == "garage") {
					this.totalGarage = this.totalGarage + 1
					console.log(this.totalGarage)
					this.charts = new Chart('chart', {
						type: 'doughnut',
						data: {
							labels: ['Garages'],
							datasets: [
								{
									label: ['Garages'],
									data: [this.totalGarage],
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
			}
		})

		//for the users and shop owners
		firebase.database().ref('userdb/').on('value', (data: any) => {
			var businesses = data.val();
			console.log(businesses);
			var key = Object.keys(businesses);
			for (var x = 0; x < key.length; x++) {
				var k = key[x];
				this.totalOutlets = x + 1
				console.log(this.totalOutlets)
				console.log(k)
				let obj = {
					address: businesses[k].address,
					diesel: businesses[k].diesel,
					email: businesses[k].email,
					gas: businesses[k].gas,
					icon: businesses[k].icon,
					lat: businesses[k].lat,
					lng: businesses[k].lng,
					name: businesses[k].name,
					owner: businesses[k].owner,
					petrol93: businesses[k].petrol93,
					petrol95: businesses[k].petrol95,
					tel: businesses[k].tel,
					uid: businesses[k].uid,
				}
				console.log(obj)
				this.AllbusinessArray.push(obj)
				console.log(this.AllbusinessArray[x].icon);
				if (this.AllbusinessArray[x].icon == "spaza") {
					this.totalSpaza = this.totalSpaza + 1
					console.log(this.totalSpaza)
				}
			}
		})

		firebase.database().ref('users/').on('value', (data: any) => {
			var users = data.val()
			console.log(users);
			var key = Object.keys(users);
			for (var x = 0; x < key.length; x++) {
				var k = key[x];
				var y = 'users/' + k
				firebase.database().ref(y).on('value',(data2:any)=>{
					var userDetails = data2.val();
					var key = Object.keys(userDetails);
					for(var u = 0;u < key.length;u++){
						var k2 = key[u]
						let obj = {
							Username: userDetails[k2].Username,
							img: userDetails[k2].img,
							userType: userDetails[k2].userType,
						}
						console.log(obj)
					this.usersArray.push(obj)
					}
					
				})
				

				console.log(this.usersArray[x].Username);
				if (this.usersArray[x].Username != null && this.usersArray[x].Username != undefined) {
					this.totalUsers = this.totalUsers + 1
					console.log(this.totalUsers)
					this.charts1 = new Chart('chart1', {
						type: 'pie',
						data: {
							labels: ['Total Users', 'Total Owners'],
							datasets: [
								{
									label: ['Total Users', 'Total Owners'],
									data: [ this.totalUsers,this.totalOutlets],
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
			}
			
		})

		

		//for the outlets`
		firebase.database().ref('userdb/').on('value', (data: any) => {
			var businesses = data.val();
			console.log(businesses);
			var key = Object.keys(businesses);
			for (var x = 0; x < key.length; x++) {
				var k = key[x];
				this.totalOutlets = x + 1
				console.log(this.totalOutlets)
				console.log(k)
				let obj = {
					address: businesses[k].address,
					diesel: businesses[k].diesel,
					email: businesses[k].email,
					gas: businesses[k].gas,
					icon: businesses[k].icon,
					lat: businesses[k].lat,
					lng: businesses[k].lng,
					name: businesses[k].name,
					owner: businesses[k].owner,
					petrol93: businesses[k].petrol93,
					petrol95: businesses[k].petrol95,
					tel: businesses[k].tel,
					uid: businesses[k].uid,
				}
				console.log(obj)
				this.usersArray.push(obj)
				console.log(this.usersArray[x].icon);
				if (this.AllbusinessArray[x].icon != null && this.AllbusinessArray[x].icon != undefined) {
					this.totalOutlets = this.totalOutlets + 1
					console.log(this.totalOutlets)
					this.charts2 = new Chart('chart2', {
						type: 'doughnut',
						data: {
							labels: ['All Outlets', 'Garage', 'Local Business'],
							datasets: [
								{
									label: ['All Outlets', 'Garage', 'Local Business'],
									data: [ this.totalOutlets,this.totalGarage,this.totalSpaza],
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
			}
		})

		
	}

	BasicChart() { }
}

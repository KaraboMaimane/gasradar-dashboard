import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  totalSpaza = 1;
  totalOutlets = 0;
  AllbusinessArray = new Array();
  smallBusinessArray = new Array();
  constructor() { }

  getBusinesses(){
    return new Promise((accpt,rej)=>{
      firebase.database().ref('userdb/').on('value',(data:any)=>{
        var businesses = data.val();
        console.log(businesses);
        var key = Object.keys(businesses);
        for(var x =0;x <key.length;x++){
          var k = key[x];
          this.totalOutlets = x  + 1
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
            outlets: this.totalOutlets
          }
          console.log(obj)
          this.AllbusinessArray.push(obj)
          console.log(this.AllbusinessArray[x].icon);
        }
      })
      accpt(this.AllbusinessArray)
    })
  }
  
  getSmallBusinesses(){
    return new Promise((accpt,rej)=>{
      firebase.database().ref('userdb/').on('value',(data:any)=>{
        var businesses = data.val();
        console.log(businesses);
        var key = Object.keys(businesses);
        for(var x =0;x <key.length;x++){
          var k = key[x];
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
            outlets: this.totalSpaza 
          }
          console.log(businesses[k].icon)
          
          if(businesses[k].icon =="spaza"){
            this.smallBusinessArray.push(obj)
            this.totalSpaza  = this.totalSpaza + 1;
            console.log(this.totalSpaza)
          }
        }
      })
      accpt(this.smallBusinessArray)
    })
  }
  
}

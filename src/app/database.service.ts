import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  businessArray = new Array();
  constructor() { }

  getBusinesses(){
    return new Promise((accpt,rej)=>{
      firebase.database().ref('userdb/').on('value',(data:any)=>{
        var businesses = data.val();
        console.log(businesses);
        var key = Object.keys(businesses);
        for(var x =0;x <key.length;x++){
          var k = key[x];
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
          this.businessArray.push(obj)
        }
      })
      accpt(this.businessArray)
    })
  }
  
}

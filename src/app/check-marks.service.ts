import { Injectable } from '@angular/core';
import axios from 'axios';
import { response } from 'express';
import { CheckMark } from './models/check-mark/checkMark.model';

@Injectable({
  providedIn: 'root'
})
export class CheckMarksService {

  constructor() { }

  async getAllCheckMarks() {
    const response = await axios.get('http://localhost:3000/all')
    .then( resp  => {
      console.log(resp.data);
      return resp.data;
    }).catch ( err => {
      console.error("errorrrr \n" + err);
      return undefined;
    })

    return response;
  }

  // async addCheckMark(payLoad) {
  //   if(payLoad) {
  //     console.log("Data required!");
  //     return undefined;
  //   }
  //   const response = await axios.post(`http://localhost:3000/create`, {})
  //   .then( resp  => {
  //     console.log(resp.data);
  //     return resp.data;
  //   }).catch ( err => {
  //     console.error("errorrrr \n" + err);
  //     return undefined;
  //   })
  //   return response;
  // }
}

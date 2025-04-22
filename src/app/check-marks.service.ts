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
      // console.log(resp.data);
      return resp.data;
    }).catch ( err => {
      console.error("errorrrr \n" + err);
      return undefined;
    })

    return response;
  }

  async addCheckMark(markDate: Date, activity: string) {
    if(!markDate || !activity) {
      console.log("Date and activity required!");
      return undefined;
    }
    console.info(`check-mark service :  mark activity called - date ${markDate} markedActivity - ${activity}`);
    const response = await axios.post(`http://localhost:3000/create`, {date: markDate, activity})
    .then( resp  => {
      console.log(resp.data);
      return resp.data;
    }).catch ( err => {
      console.log(err?.response?.data?.message);
      return undefined;
    })
    console.log("response from server - " + response);
    return response;
  }
}

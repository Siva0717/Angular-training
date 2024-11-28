import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }
  getList(){
    return[
      {'grade':1, 'name':'Siva','Country':'India'},
      {'grade':2, 'name':'Achu','Country':'Russia'}

      
    ];
  }
}

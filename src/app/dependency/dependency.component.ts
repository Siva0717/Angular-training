import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dependency',
  standalone:true,
  imports: [],
  templateUrl: './dependency.component.html',
  styleUrl: './dependency.component.css'
})
export class DependencyComponent  {
  test:string;
  constructor(private testService:TestService){
    this.test=this.testService.getGreeting();
    



}
}

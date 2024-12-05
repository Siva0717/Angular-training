import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-pipes',
  standalone:true,
  imports: [CurrencyPipe,UpperCasePipe, LowerCasePipe,PercentPipe,DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  
    price = 1234.56;
    siva="Siva";
    percentage=95.346;
    birthday = new Date(2002, 10, 17); 


}

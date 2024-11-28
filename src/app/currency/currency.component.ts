import { CurrencyPipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  standalone:true,
  imports: [CurrencyPipe,UpperCasePipe, LowerCasePipe,PercentPipe],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  price = 1234.56;
  siva="Siva";
  percentage=95.346;
}
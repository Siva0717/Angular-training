import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-form',
  imports:[ButtonComponent],
 
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}

import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-authguard',
  standalone:true,
  imports: [FormComponent],
  templateUrl: './authguard.component.html',
  styleUrl: './authguard.component.css'
})
export class AuthguardComponent {

}

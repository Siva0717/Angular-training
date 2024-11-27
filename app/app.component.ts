import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'myApp';
}


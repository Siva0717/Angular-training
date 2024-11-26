import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TriggerComponent } from './trigger/trigger.component';

export const routes: Routes = [
   {
    
path:'register-form',
component: RegisterComponent,
   } ,
   {
    path:'login-form',
    component:LoginComponent,
   },
   {
path:'',
component:AppComponent,
   },
   {
path:'trigger',
component:TriggerComponent,
   }
   
];


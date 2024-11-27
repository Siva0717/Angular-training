import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { CurrencyComponent } from './currency/currency.component';

export const routes: Routes = [{
    path:'pipes',
    component:PipesComponent,
},
{
    path:'form',
    component:FormComponent,
},
{
    path:'currency',
    component:CurrencyComponent
},
{
    path:'',
    component:AppComponent,
}


];

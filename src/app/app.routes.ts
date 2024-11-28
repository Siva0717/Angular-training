import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { CurrencyComponent } from './currency/currency.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [{
    path:'pipes',
    component:PipesComponent,
},
{
    path:'form',
    component:FormComponent,
    canActivate:[authGuard],
},
{
    path:'currency',
    component:CurrencyComponent,
},
{
    path:'register',
    component:RegisterComponent,
},
{
    path:'',
    component:AppComponent,
},
{path:'',
    component:AuthguardComponent,
}


];

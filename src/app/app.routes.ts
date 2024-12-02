import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DependencyComponent } from './dependency/dependency.component';

export const routes: Routes = [
    {
        path:'dependency',
        component:DependencyComponent,
    },
    {
        path:'header',
        component:HeaderComponent,
        children:[
            {
                path:'home',
                component:HomeComponent,
            },
            {
                path:'service',
                component:ServiceComponent,

            },
            
            
            {
                path:'about',
                component:AboutComponent
            },
            {
                path:'contact',
                component:ContactComponent
            }
        ]

    }
    
];


import { Routes } from '@angular/router';
import { App } from './app';
import { ContactUs } from './contact-us/contact-us';
import { HomeComponent } from './home-component/home-component';
import { User } from './user/user';
import { UserDisplay } from './user-display/user-display';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'contact',
        component: ContactUs
    },
    {
        path:'users',
        component:User
    },
    {
        path:'user/:id',
        component: UserDisplay
    }
];

// localhost:4200/user/123

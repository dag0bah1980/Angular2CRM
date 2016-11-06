import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './login.component';


const APP_ROUTES: Routes =[
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
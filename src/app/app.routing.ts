import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './login.component';
import { NewloginComponent } from './newlogin.component';

const APP_ROUTES: Routes =[
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newlogin', component: NewloginComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: '',
       loadChildren: () => import('./features/form-component/form.routes').then(m => m.FORM_ROUTES),
    },
    { path: '**', redirectTo: '' }

];

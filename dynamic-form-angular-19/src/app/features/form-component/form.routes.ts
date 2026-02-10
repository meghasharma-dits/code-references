import { Route } from "@angular/router";

export const FORM_ROUTES: Route[] = [
    {
        path: '', 
        loadComponent: () => import('./form-component.component').then(m => m.FormComponentComponent),
    }
]
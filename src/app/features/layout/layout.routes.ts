import { Route } from "@angular/router";

export const LAYOUT_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./layout.component').then(m => m.LayoutComponent), children: [
            {
                path: 'form', loadChildren: () => import('../form-component/form.routes').then(m => m.FORM_ROUTES)
            }
        ]
    }
]
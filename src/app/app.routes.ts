//imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// components
import { StoreListComponent } from './store-list/store-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Routes declaration
const routes: Routes = [
    // core module components
    { path: '', component: StoreListComponent },
    // 404 page not found
    { path: '**', component: PageNotFoundComponent }
]

//module export
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
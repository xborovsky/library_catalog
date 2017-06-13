import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './../book-list/book-list.component';
import { BookFormComponent } from './../book-form/book-form.component';
import { BookDetailComponent } from './../book-detail/book-detail.component';
import { BookEditComponent } from './../book-edit/book-edit.component';
import { ErrorPageComponent } from './../error-page/error-page.component';

export const routes : Routes = [
    {path : '', component : BookListComponent},
    {path : 'new', component : BookFormComponent},
    {path : 'detail/:id', component : BookDetailComponent},
    {path : 'edit/:id', component : BookEditComponent},
    {path : 'error', component : ErrorPageComponent}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class RoutesModule {
}
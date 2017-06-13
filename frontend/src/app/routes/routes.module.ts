import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './../book-list/book-list.component';
import { BookFormComponent } from './../book-form/book-form.component';
import { BookDetailComponent } from './../book-detail/book-detail.component';
import { BookEditComponent } from './../book-edit/book-edit.component';
import { LoginComponent } from './../login/login.component';
import { LogoutComponent } from './../logout/logout.component';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { AuthService } from './../auth.service';

export const routes : Routes = [
    {path : '', component : BookListComponent, canActivate : [AuthService]},
    {path : 'new', component : BookFormComponent, canActivate : [AuthService]},
    {path : 'detail/:id', component : BookDetailComponent, canActivate : [AuthService]},
    {path : 'edit/:id', component : BookEditComponent, canActivate : [AuthService]},
    {path : 'login', component : LoginComponent},
    {path : 'logout', component : LogoutComponent},
    {path : 'error', component : ErrorPageComponent}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class RoutesModule {
}

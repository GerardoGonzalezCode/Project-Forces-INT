import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DepartmentComponent } from './components/department/department.component';
import { HomeComponent } from './components/home/home.component';
import { RolesComponent } from './components/roles/roles.component';
import { SearchComponent } from './components/shared/search/search.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'manage/:id', component: UserManageComponent},
  { path: 'register', component: UserRegisterComponent},
  { path: 'search/:term', component: SearchComponent},
  { path: 'table', component: UserTableComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

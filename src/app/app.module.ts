import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { DepartmentComponent } from './components/department/department.component';
import { RolesComponent } from './components/roles/roles.component';
import { AboutComponent } from './components/about/about.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/shared/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserManageComponent,
    DepartmentComponent,
    RolesComponent,
    AboutComponent,
    UserTableComponent,
    SearchComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

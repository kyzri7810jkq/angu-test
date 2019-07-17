import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent }, 
  { path: 'employee', component: EmployeeComponent }, 
  { path: '', component: HomeComponent, data: { title: 'Welcome Home' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostsComponent, EmployeeComponent, HomeComponent ]
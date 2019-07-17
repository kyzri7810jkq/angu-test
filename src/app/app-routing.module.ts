import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StudentModule } from './student/student.module';

const routes: Routes = [
	{ path: 'students', loadChildren: './student/student.module#StudentModule' },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'signup', component: PostsComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, StudentModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactsComponent, PostsComponent, SignupComponent, LoginComponent]
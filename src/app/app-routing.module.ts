import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'signup', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactsComponent, PostsComponent, SignupComponent]
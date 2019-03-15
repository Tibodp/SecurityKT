import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
// **Student code change starts**
import { ProfileComponent } from './profile/profile.component';
// **Student code change ends**

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  // **Student code change starts**
  { path: 'profile', component: ProfileComponent},
  // **Student code change ends**
  { path: '**', redirectTo: '' }
];

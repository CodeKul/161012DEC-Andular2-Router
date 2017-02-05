import { OffsComponent } from './user/offs.component';
import { ProfileComponent } from './user/profile.component';
import { Routes } from '@angular/router';

export const USER_ROUTES : Routes = [
    {path : 'profile', component : ProfileComponent},
    {path : 'offs', component : OffsComponent}
];
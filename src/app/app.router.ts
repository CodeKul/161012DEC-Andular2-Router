import { GuestComponent } from './guest/guest.component';
import { WallComponent } from './wall/wall.component';
import { UserComponent } from './user/user.component';

import {Routes,  RouterModule} from '@angular/router'

const APP_ROUTES : Routes = [
    {path:'', component : WallComponent},
    {path :'user/:id/:id1', component : UserComponent},
    {path :'guest', component : GuestComponent},
    {path :'google', redirectTo:'https://angular-2-training-book.rangle.io/handout/routing/config.html'}
];

export const MyRoutes = RouterModule.forRoot(APP_ROUTES)
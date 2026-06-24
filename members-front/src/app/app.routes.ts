import { Routes } from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail';
import { NewMemberComponent } from './new-member/new-member';

export const routes: Routes = [
    { path: 'member-detail/:id', component: MembersDetailComponent },
    { path: 'new-member', component: NewMemberComponent },
];

export class AppRoutingModule { }
export const routingComponents = [MembersDetailComponent];
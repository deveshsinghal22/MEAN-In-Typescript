import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component'
import {ProfileComponent} from './profile/profile.component';
import {UserResolverService} from "./profile/user-resolver.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user/profile',
        component: ProfileComponent,
        data: {title: 'Profile'},
        resolve: {
          profile: UserResolverService
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

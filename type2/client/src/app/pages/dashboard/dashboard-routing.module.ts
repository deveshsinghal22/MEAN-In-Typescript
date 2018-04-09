import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {AuthGuardService} from "app/shared/util/auth-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        data: {title: "Dashboard"}
      }
    ])
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

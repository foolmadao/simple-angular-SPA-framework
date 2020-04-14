import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { Exception404Component } from './exception404/exception404.component';
import { Exception500Component } from './exception500/exception500.component';
import { Exception403Component } from './exception403/exception403.component';
import { LayoutPassportComponent } from './../layout/layout-passport/layout-passport.component';
import { WorkViewComponent } from './../layout/work-view/work-view.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: WorkViewComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent }
    ]
  },
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login', component: LoginComponent, data: { title: '登录', titleI18n: 'pro-login' }
      },
    ]
  },
  { path: '403', component: Exception403Component },
  { path: '500', component: Exception500Component },
  { path: '**', component: Exception404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }

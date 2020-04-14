import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes-routing.module';
import { Exception404Component } from './exception404/exception404.component';
import { Exception500Component } from './exception500/exception500.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Exception403Component } from './exception403/exception403.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Exception404Component,
    Exception500Component,
    HomePageComponent,
    Exception403Component,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class RoutesModule { }

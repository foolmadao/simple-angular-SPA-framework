import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkViewComponent } from './work-view/work-view.component';
import { LayoutPassportComponent } from './layout-passport/layout-passport.component';
import { WorkViewHeaderComponent } from './work-view/work-view-header/work-view-header.component';
import { WorkViewFooterComponent } from './work-view/work-view-footer/work-view-footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    WorkViewComponent,
    LayoutPassportComponent,
    WorkViewHeaderComponent,
    WorkViewFooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    WorkViewComponent,
    LayoutPassportComponent,
    WorkViewHeaderComponent,
    WorkViewFooterComponent
  ],
})
export class LayoutModule { }

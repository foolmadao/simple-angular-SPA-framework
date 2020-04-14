import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule { }

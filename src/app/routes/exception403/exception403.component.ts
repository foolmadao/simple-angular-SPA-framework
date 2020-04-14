import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exception403',
  template: '<div style="min-height: 500px; height: 80%;"> 403</div>'
})
export class Exception403Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}

import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exception500',
  template: '<div style="min-height: 500px; height: 80%;"> 500</div>',
})
export class Exception500Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}


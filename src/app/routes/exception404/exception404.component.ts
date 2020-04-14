import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exception404',
  template: '<div style="min-height: 500px; height: 80%;"> 404</div>'
})
export class Exception404Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}

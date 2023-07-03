import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ng-dom',
  templateUrl: './ng-dom.component.html',
  styleUrls: ['./ng-dom.component.less']
})
export class NgDomComponent implements AfterViewInit {


  @ViewChild('domBox') domBox: any;
  @ViewChildren('domBoxs') domBoxs: any;
  ngAfterViewInit () {
    // JS 原生获取DOM
    console.log(document.querySelector('.domBox'))
    console.log(this.domBox.nativeElement);
    console.log(this.domBoxs.toArray()[0].nativeElement);
    console.log(this.domBoxs.toArray()[1].nativeElement);
    console.log(this.domBoxs.toArray()[2].nativeElement);
  }

}

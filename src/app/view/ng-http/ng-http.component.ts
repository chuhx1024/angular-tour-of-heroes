import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-http',
  templateUrl: './ng-http.component.html',
  styleUrls: ['./ng-http.component.less']
})
export class NgHttpComponent {
  // 服务需要使用 依赖注入机制进行加载
  constructor (public http: HttpClient) {}

  ngOnInit() {
    let url = 'http://101.96.128.94:9999/mfresh/data/product_select.php'
    this.http.get(url).subscribe(res => {
        console.log(res)
    })
    let body = 'pno=1'
    let option = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded'
      })
    }
    this.http.post(url, body, option).subscribe(res => {
        console.log(res)
    })
  }

}

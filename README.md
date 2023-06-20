## 创建项目  
```js
ng new angular-tour-of-heroes
```

### 启动项目

### 创建一个组件 和微信一样
```js
ng generate component view/home 
```

### 路由传参
```js
// 路由配置
{path: 'ng-switch/:paramsId/:name', component: NgSwitchComponent},
// 父级按钮
<a [routerLink]="['/ng-switch', '666']" [queryParams]="{id: 123}" [data]="{}" >routerlink去ng-switch</a>

// 子路由获取query params 参数
import { ActivatedRoute } from "@angular/router";
export class NgSwitchComponent {
  constructor (private routerinfo:ActivatedRoute ) {}
  ngOnInit () {
    console.log(this.routerinfo.snapshot.queryParams['id'])
    console.log(this.routerinfo.snapshot.params['paramsId'])
    this.routerinfo.params.subscribe((params) => {
      console.log(params['paramsId'])
      console.log(params['name'])
    })
  }
}
```
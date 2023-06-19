import { Injectable } from '@angular/core';

@Injectable({
  // 作用域设定 root 表示注册到全局
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  lists: string[] = ['vue', 'react']
  pushItem () {
    this.lists.push('angular')
  }
}

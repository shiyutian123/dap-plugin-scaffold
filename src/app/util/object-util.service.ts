import { Injectable } from '@angular/core';

@Injectable()
export class ObjectUtilsService {
    private class2type = {};

    constructor() {
      this.initClass2type();
    }
    public transformTimeToDate(value: any, format): Date {
        if (format === 'HH:mm:ss') {
            value = `1970-01-01 ${value}`;
        }
        const t = Date.parse(value);
        if (!isNaN(t)) {
            return new Date(Date.parse(value.replace(/-/g, "/")));
        } else {
            return new Date();
        }
    }
    /**
     * 对象拷贝，参考$.extend()实现。首个参数为true时为深度拷贝，默认为false。
     * 深度遍历，使用方法：let newObj = this.extend(true, {}, objA, objB);
     * @param args 所有参数
     * @returns 返回合并后的对象
     * SharedService
     */
    public extend(...args) {
      let options, name, src, srcType, copy, copyIsArray, clone,
        target = args[0] || {},
        i = 1 ,
        deep = false;
      const length = args.length;
      if ( typeof target === 'boolean') {
        deep = target;
        target = args[i] || {};
        i++;
      }
      if ( typeof target !== 'object' && typeof target !== 'function') {
        target = {};
      }
      if ( i === length) {
        target = this;
        i--;
      }
      for ( ; i < length; i++ ) {
        if ( (options = args[i]) !== null ) {
          for (name of Object.keys(options)) {
            src = target[name];
            copy = options[name];
            // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
            // 这是为了防止无限的循环嵌套
            if ( target === copy ) {
              continue;
            }
            srcType = Array.isArray(src) ? 'array' : typeof src;
            // 不能用typeof判断一个数组是否为数组格式，例：typeof [] -> object。如需判断的话可用'[] instanceof Array'方法。
            // copyType = typeof copy;
            if ( deep && copy && ((copyIsArray = Array.isArray(copy)) || typeof copy === 'object')) {
              if ( copyIsArray ) {
                copyIsArray = false;
                clone = src && srcType === 'array' ? src : [];
              } else {
                clone = src && srcType === 'object' ? src : {};
              }
              target[name] = this.extend(deep, clone, copy);
            } else if ( copy !== undefined ) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    }

    private type(obj: object) {
      if (obj === null) {
        return obj + "";
      }
      return typeof obj === 'object' || typeof obj === 'function' ?
          this.class2type[this.toString.call(obj)] || 'object' :
          typeof obj;
    }

    private initClass2type() {
      if (!this.class2type) {
        this.class2type = {};
      }
      for (const name of 'Boolean Number String Function Array Data RegExp Object Error'.split(' ')) {
        this.class2type['[object ' + name + ']'] = name.toLowerCase();
      }
    }
}

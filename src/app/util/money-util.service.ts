import { Injectable } from "@angular/core";

@Injectable()
export class MoneyUtilService {
    /**
     * @description: 处理金额的千分位
     * @param num {string | number} 金额数字
     * @param cent {string | number} 保留小数点位置
     * @param isThousand 是否生成千分位
     * @return: 处理好的千分位金额字符串
     */
    formatThousandth(num, cent, isThousand: boolean): string {
        const reg=/\d{1,3}(?=(\d{3})+$)/g;
        let result;
        if (num || num === 0) {
            num = num.toString().replace(/$|,/g, '');
            const dotIndex = num.indexOf('.');
            if (dotIndex > -1) {
                let dotLeft = num.substring(0, dotIndex);
                if (isThousand) {
                    dotLeft = (dotLeft + '').replace(reg, '$&,');
                }
                let dotRight = num.substring(dotIndex + 1, (dotIndex + cent + 1));
                if (dotRight.length < cent) {
                    while (dotRight.length < cent) {
                        dotRight += '0';
                    }
                }
                result = `${dotLeft}.${dotRight}`;
            } else {
                if (isThousand) {
                    result = (num + '').replace(reg, '$&,');
                } else {
                    result = num;
                }
                if (cent > 0) {
                    result += '.';
                    for (let i = 0; i < cent; i++) {
                        result += '0';
                    }
                }
            }
        }
        
        return result;
        // if (isNaN(cent)) {
        //     cent = 0;
        // }
        // cent = parseInt(cent);
        // cent = Math.abs(cent);
        // var sign = (num == (num = Math.abs(num)));
        // num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); //把指定的小数位先转换成整数.多余的小数位四舍五入.
        // var cents: any = num % Math.pow(10, cent); //求出小数位数值.
        // num = Math.floor(num / Math.pow(10, cent)).toString();//求出整数位数值.
        // cents = cents.toString();//把小数位转换成字符串,以便求小数位长度.
        // while (cents.length < cent) {//补足小数位到指定的位数.
        //     cents = "0" + cents;
        // }
        // if (!isThousand) { //不需要千分位符.
        //     return (((sign) ? '' : '-') + num + '.' + cents);
        // }
        // //对整数部分进行千分位格式化.
        // for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        //     num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        // }
        // return (((sign) ? '' : '-') + num + '.' + cents);
        // const reg=/\d{1,3}(?=(\d{3})+$)/g;
        // return (num + '').replace(reg, '$&,');
    }

    toNumber(money: any) {
        if (money) {
            money = typeof money === 'number' ? money.toString() : money;
            return new Number(money.replace(/$|,/g, ''));
        }
        return money;
    }
}

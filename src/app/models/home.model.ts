
export class MenuItem {
    itemText: string;
    iconType: string;
    navigateLink?: string;
    routeName?: string;
    routeParam?: any;
    isHidden?: boolean;

    constructor(itemText: string, iconType: string, navigateLink?: string, routeName?: string, routeParam?: any, isHidden?: boolean) {
        this.itemText = itemText;
        this.iconType = iconType;
        this.navigateLink = navigateLink;
        this.routeName = routeName;
        this.routeParam = routeParam;
        this.isHidden = isHidden;
    }
}

export class FormItem {

    describe: string;
    key: string;
    value: any;
    type: string;
    iconType?: string;

    constructor(describe: string, key: string, value: string, type: string, iconType?: string) {
        this.describe = describe;
        this.key = key;
        this.value = value;
        this.type = type;
        this.iconType = iconType;
    }

}

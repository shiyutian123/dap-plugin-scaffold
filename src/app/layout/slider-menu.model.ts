
export class SliderMenuItem {
    functionType?: string;
    haveChild?: boolean;
    icon?: string;
    name?: string;
    itemText: string;
    iconType: string;
    navigateLink?: string;
    path?: string;
    routeName?: string;
    routeParam?: any;
    isHidden?: boolean;
    isGroup?: boolean;
    isSubmenu?: boolean;

    constructor(name: string, itemText: string, iconType: string, navigateLink?: string, path?: string,
        routeName?: string, routeParam?: any, isHidden?: boolean, isGroup?: boolean, isSubmenu?: boolean) {
        this.name = name;
        this.itemText = itemText;
        this.iconType = iconType;
        this.navigateLink = navigateLink;
        this.path = path;
        this.routeName = routeName;
        this.routeParam = routeParam;
        this.isHidden = isHidden;
        this.isGroup = isGroup;
        this.isSubmenu = isSubmenu;
    }
}

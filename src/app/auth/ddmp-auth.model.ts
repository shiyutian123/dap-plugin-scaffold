export class DdmpUser {
    id?: any ;
    authCode: string ;
    code?: string ;
    name?: string ;
    sex?: string;
    headIcon?: string ;
    extraInfo?: any ;
    expireTime?: number ;
}

export class DdmpToken {
    authCode: string ;
    userCode?: string ; // 用户 code
    accessToken: string ; // 此处的 accessToken 信息
    refreshToken?: string ; // 此处为 refreshToken 信息
    authType?: string ; // 此处为认证类型
    accessExpireTime?:  number ; // 过期时间，毫秒数
}

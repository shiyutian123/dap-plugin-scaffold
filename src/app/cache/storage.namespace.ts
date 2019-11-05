/**
 *  以app开始
 */
export const GLOBAL_NAMESPACE = 'app.';
export const APP_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'appInfo.';
export const INIT_FLAG = APP_INFO_NAMESPACE + 'initFlag';
export const START_USING_DATE = APP_INFO_NAMESPACE + 'startUsingDate';

/**
 *  用户信息相关，存在SessionStorage比较合适，比如token
 */
export const USER_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'userInfo.';
export const USER_NAME = USER_INFO_NAMESPACE + 'userName';
export const USER_ID = USER_INFO_NAMESPACE + 'userId';
export const USER_GENDER = USER_INFO_NAMESPACE + 'userGender';
export const USER_EMAIL = USER_INFO_NAMESPACE + 'userEmail';
export const USER_PHONE = USER_INFO_NAMESPACE + 'userPhone';
export const USER_ICON = USER_INFO_NAMESPACE + 'userIcon';
export const TOKEN = USER_INFO_NAMESPACE + 'token';
export const USER_TYPE = USER_INFO_NAMESPACE + 'type';
export const BUSINESS_CENTERS_OWN_BY_USER = USER_INFO_NAMESPACE + 'businessCentersList';


/**
 *  非敏感信息，存储在localStorage中，例如app布局信息，皮肤等等
 */
export const APP_LAYOUT = GLOBAL_NAMESPACE + 'layout';

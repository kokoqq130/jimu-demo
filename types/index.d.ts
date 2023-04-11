/// <reference types="vue" />

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.bmp';
declare module '*.jpg';
declare module '*.mp3';

declare namespace NodeJS {
  interface ProcessEnv {
    SPA_URI: string;
    GRAPHQL_URI: string;
  }
}

declare namespace NativePlugin {
  import { Ref } from 'vue';
  type GetComponentRectCallBack = (option: { result: boolean; size: {} }) => void;
  interface DOMModule {
    getComponentRect: (domRef: Ref<HTMLElement>, cb: GetComponentRectCallBack) => any;
  }
}

interface updateBase {
  /**
   * 更新标题
   * */
  title?: string;
  /**
   * 更新内容
   * */
  content?: string;
  /**
   * 最新版本号
   * */
  version: string;
  /**
   * 更新类型
   * */
  update_type?: 'forced' | 'silent' | 'prompt';
}

interface UpdatePackInfo extends updateBase {
  /**
   * 下载地址
   * */
  url: string;
  /**
   * 包类型
   * */
  type: 'wgt';
  /**
   * 平台
   * */
  platform?: string;
}

interface AppUpdateInfo extends updateBase {
  /**
   * 下载地址
   * */
  package_url: string;
  /**
   * 包类型
   * */
  pack_type?: 'wgt';
}

interface Template {
  /* TODO 需要完善 */
}

interface Commodity {
  /* TODO 需要完善 */
}

type PopupPosition = 'bottom' | 'top' | 'left' | 'right';

interface PopupRef {
  open: (type?: PopupPosition) => void;
  close: () => void;
}

interface ResponseInfo {
  /**
   * 请求Id
   * */
  requestId: string;
  /**
   * 请求url
   * */
  requestUrl: string;
  /**
   * 请求返回内容
   * */
  content?: string;
  /**
   * 返回数据类型
   * */
  contentType?: string;
}

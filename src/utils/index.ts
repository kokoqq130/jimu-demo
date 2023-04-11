import CryptoJs from 'crypto-js';
import { v4 as uuidV4 } from 'uuid';

/**
 * 生成UUID
 * */
export const uuid = () => {
  return uuidV4().replace(/-/g, '');
};
/**
 * @author
 * @date 2021/8/19
 * @Description: 判断是否为有数据的数组
 */
export const isArrLen = (arr: any): boolean => {
  return arr && Array.isArray(arr) && arr.length > 0;
};

export const addPreZero = (num: number, limit: number) => (`000000000${num}`).slice(-limit)

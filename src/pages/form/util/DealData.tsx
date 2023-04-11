import React from 'react';
import { Schema} from '@formily/react';
import { addPreZero, uuid } from '@/utils';

export interface IJSONTypeInfo {
  typeInfo: {
    name: string;
    type: 'choice' | 'answer';
    icon: any;
  };
  choiceArr?: any[];
  title: string;
  isCheck?: '0' | '1';
  isRequied?: '0' | '1';
  moduleId?: string;
}
const renderTitle = (title: string,) => `${title || ''}`;
const renderDomTitle = (item: IJSONTypeInfo) => <div className={item.title ? '' : 'form-preview-title'}>{item.isRequied === '1' ? <span className='form-preview-title-requied'>*</span> : null}<span>{item.title || '请输入问题'}</span></div>;
const renderIndex = (index: number) => `${addPreZero((index as number) + 1, 2)}`;
const toAnswer = (i: IJSONTypeInfo, fieldId: string, index: number, formPreview) => {
  return {
  type: 'void',
  'x-index': index,
  'x-component': 'WfjtestFormLayout',
  'x-component-props': {
    labelCol: 6,
    wrapperCol: 10,
    layout: 'vertical',
  },
  properties: {
    [fieldId]: {
      type: 'string',
      title: formPreview ? renderDomTitle(i) : renderTitle(i.title),
      'x-decorator': 'WfjtestFormilyMobilePreviewFormItem',
      'x-decorator-props': {
        gridSpan: 4,
        indexStr: renderIndex(index),
      },
      'x-component': 'WfjtestFormilyMobilePreviewTextarea',
      'x-component-props': {
        placeholder: '待填写人输入',
        autoSize: !formPreview,
        rows: 1,
        className: formPreview ? 'form-preview-textarea-warp' : '',
      },
      'x-disabled': formPreview,
      'x-validator': formPreview ? [] : [
        { required: i.isRequied === '1', message: '此题为必填，请完成' },
        { max: 1000, message: '至多输入1000个字符' },
      ],
    },
  },
}};
const toChoice = (i: IJSONTypeInfo, fieldId: string, index: number, formPreview) => {
  const isCheck = i.isCheck && i.isCheck === '1';
  return {
    type: 'void',
    'x-component': 'WfjtestFormLayout',
    'x-component-props': {
      labelCol: 6,
      wrapperCol: 10,
      layout: 'vertical',
    },
    'x-index': index,
    properties: {
      [fieldId]: {
        type: 'items',
        title: formPreview ? renderDomTitle(i) : renderTitle(i.title),
        enum:
          i.choiceArr &&
          i.choiceArr.map((checkItem, checkIndex) => ({
            label: checkItem,
            value: (checkIndex).toString(),
          })),
        'x-decorator': 'WfjtestFormilyMobilePreviewFormItem',
        'x-decorator-props': {
          indexStr: renderIndex(index),
        },
        'x-disabled': formPreview,
        'x-component': isCheck ? 'WfjtestFormilyMobilePreviewCheckboxGroup' : 'WfjtestFormilyMobilePreviewRadioGroup',
        'x-component-props': {
          placeholder: '请选择',
        },
        'x-validator': formPreview ? [] : [{ required: i.isRequied === '1', message: '此题为必填，请完成' }],
      },
    },
  };
};
export const genFountSchema = (i: IJSONTypeInfo, fieldId: string, index: number, formPreview: boolean | undefined) => {
  const { type } = i?.typeInfo;
  // 输入框
  if (type === 'answer') {
    return toAnswer(i, fieldId, index, formPreview);
  }
  if (type === 'choice') {
    return toChoice(i, fieldId, index, formPreview);
  }
  return null;
};
export const getModuleId = (): string => {
  return uuid();
};


export const deepSchemaByKey = (schemas: Schema, findKey: string, aaa: any[]) => {
  schemas.mapProperties((schema: Schema, key) => {
    if (schema.properties) {
      deepSchemaByKey(schema, findKey, aaa);
      if (key === findKey) {
        aaa.push(schema.toJSON());
      }
    } else if (key === findKey) {
      aaa.push(schema.toJSON());
    }
  });
  return aaa;
};
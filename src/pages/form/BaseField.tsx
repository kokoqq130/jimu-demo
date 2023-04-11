import React, {ReactNode} from 'react';
import { StopOutline } from 'antd-mobile-icons';
import { useMount } from 'ahooks';
import { observable } from '@formily/reactive';
import {ArrayField as ArrayFieldType} from '@formily/core';
import {Divider, Checkbox, message} from 'antd';
import { Observer, useField } from '@formily/react';
import { StyledFormilyPropertyWarp } from '@/assets/styleds/FormilyAntdMobile';
import { StyledBase } from '@/assets/styleds/Form';
import { addPreZero } from '@/utils';
import SchemaField from '@/pages/form/genFormSchema';
import { StyledFormilyDisabledRemove } from '@/assets/styleds/FormilyAntd';
import OperationList, {operationObs} from '@/pages/form/OperationList';
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {formFieldsTypes} from "@/pages/form/config";
import {useHistory} from "react-router";

export const baseFieldObs: {
  switchChangeVal: boolean[];
} = observable({
  switchChangeVal: [],
});

export interface IAnswerFieldProps {
  onChangeRequired?: (e: any) => void;
  value?: any;
  children?: ReactJSXElement;
  rightChild?: ReactNode | string;
  leftChild?: ReactNode | string;
  leftBottomChild?: ReactNode | string;
  optionField: ArrayFieldType;
}

export const DisabledRemove: React.FC = () => {
  return (
    <StyledFormilyDisabledRemove
      onClick={() => {
        message.warning({
          content: '至少保留一个选项',
          className: 'custom-message-class',
        });
      }}>
      <StopOutline />
    </StyledFormilyDisabledRemove>
  );
};
const BaseField: React.FC<React.PropsWithChildren<IAnswerFieldProps>> = ({  optionField, leftChild, leftBottomChild, rightChild, children, onChangeRequired, ...otherProps }) => {
  // const keyRef = useRef<boolean>(false)
  const field: any = useField();
  const history = useHistory();

  const typeClass: string = field.componentType === 'WfjtestChoiceField' ? `Wfjtest_${formFieldsTypes.choice}_formitem` : `Wfjtest_${formFieldsTypes.answer}_formitem`
  useMount(() => {
    // inputRef && inputRef.current && inputRef.current.focus();
    baseFieldObs.switchChangeVal[field.index] = field?.value?.isRequied === '1';
  });
  const onChange = e => {
    baseFieldObs.switchChangeVal[field.index as number] = e.target.checked;
    field.value.isRequied = e.target.checked ? '1' : '0';
    if (onChangeRequired) {
      onChangeRequired(e);
    }
  };
  return (
    <StyledBase>
      <div className="fields-inner-warp">
        <span className="view-index-warp">{baseFieldObs.switchChangeVal[field.index as number] ? <span style={{ color: 'red' }}>*</span> : null }{addPreZero((field.index as number) + 1, 2)}</span>
        <div className="base-fields-warp">
          <div className="base-fields-one-warp">
            <SchemaField
              schema={{
                type: 'void',
                properties: {
                  title: {
                    type: 'string',
                    'x-decorator': 'WfjtestFormilyMobileFormItem',
                    'x-decorator-props': {
                      noStyle: true,
                      className: `Wfjtest_base_formitem ${typeClass}`,
                    },
                    'x-component': 'WfjtestFormilyMobileTextarea',
                    'x-component-props': {
                      placeholder: '请输入问题',
                      autoSize: true,
                      rows: 1,
                      autoFocus: !operationObs.isShow,
                    },
                    'x-validator': [
                      { max: 200, message: '问题至多输入200个字符' },
                      { required: true, message: '标题不能为空' },
                    ],
                  },
                  moduleId: {
                    type: 'string',
                    'x-decorator': 'WfjtestFormilyMobileFormItem',
                    'x-decorator-props': {
                      noStyle: true,
                    },
                    'x-component': 'NiimbotFormilyMobileInput',
                    'x-component-props': {
                    },
                    'x-hidden': true,
                  },
                },
              }}
            />
            <OperationList index={field.index as number} optionField={optionField} />
          </div>
        </div>
      </div>
      {children}
      <Divider style={{ margin: '14px 0' }} />
      <StyledFormilyPropertyWarp>
        <div>
          {leftChild || (
            <Observer>
              <Checkbox checked={baseFieldObs.switchChangeVal[field.index as number]} onChange={onChange}>
                必填
              </Checkbox>
            </Observer>
          )}
          <div>{leftBottomChild}</div>
        </div>
        <div>{rightChild}</div>
      </StyledFormilyPropertyWarp>
    </StyledBase>
  );
};
export default BaseField;

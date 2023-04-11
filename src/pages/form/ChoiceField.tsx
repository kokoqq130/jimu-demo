import React, { Context, useReducer } from 'react';
import {ArrayField as ArrayFieldType, Field, GeneralField} from '@formily/core';
import { message, Checkbox } from 'antd';
import { observable } from '@formily/reactive';
import { observer, Observer, useField, useFieldSchema } from '@formily/react';
import { useMount } from 'ahooks';
import { StyledChoice } from '@/assets/styleds/Form';
import SchemaField from '@/pages/form/genFormSchema';
import BaseField, {baseFieldObs} from '@/pages/form/BaseField';
import {IValidatorRules} from "@formily/validator";
import {operationObs} from "@/pages/form/OperationList";

export interface IChoiceFieldProps {
  optionField: ArrayFieldType;
}

export const choiceObs: {
  switchChangeVal: boolean[];
  activeKey: string;
} = observable({
  switchChangeVal: [],
  activeKey: '',
});

const ChoiceField: React.FC<React.PropsWithChildren<IChoiceFieldProps>> = observer(({ optionField, onFieldAdd }) => {
  const fieldsSchema = useFieldSchema();
  const field: any = useField<GeneralField>();
  const isCreate = true;
  useMount(() => {
    if (field.value.choiceArr && field.value.choiceArr.length === 0) {
      field.value.choiceArr = ['', '', ''];
    }
    choiceObs.switchChangeVal[field.index] = field?.value?.isCheck === '1';
  });
  const changeSwitch = (e: any) => {
    const vals = field.value.choiceArr;
    if (vals && vals.length && vals.length === 1) {
      choiceObs.switchChangeVal[field.index] = false;
      message.warning({
        content: '只有一个选项时不可设置为可多选',
        className: 'custom-message-class',
      });
    } else {
      choiceObs.switchChangeVal[field.index] = e.target.checked;
    }
    field.value.isCheck = e.target.checked ? '1' : '0';
  };
  const vals = field.value.choiceArr;
  // @ts-ignore
  return (
    <StyledChoice>
      <BaseField
        leftBottomChild={
          vals && vals.length && vals.length === 1 ? null : (
            <Observer>
              {() => (
                <Checkbox checked={choiceObs.switchChangeVal[field.index as number]} onChange={changeSwitch}>
                  可多选
                </Checkbox>
              )}
            </Observer>
          )
        }
        optionField={optionField}
        onChangeRequired={e => {
          console.info(e.target.checked);
        }}>
        {isCreate ? (
          <SchemaField
            schema={{
              type: 'object',
              properties: {
                choiceArr: {
                  type: 'array',
                  maxItems: 25,
                  minItems: 1,
                  'x-component': 'WfjtestFormilyArrayBase',
                  'x-decorator': 'WfjtestFormilyMobileFormItem',
                  items: {
                    type: 'void',
                    'x-component': 'WfjtestFormilyArrayWarp',
                    properties: {
                      remove: {
                        type: 'void',
                        'x-component': 'WfjtestFormilyArrayRemove',
                        'x-component-props': {
                          onClick: () => {
                            const values = field.value.choiceArr;
                            if (values.length === 1) {
                              choiceObs.switchChangeVal[field.index] = false;
                            }
                          },
                        },
                        'x-reactions': [
                          {
                            when: '{{$self.parent.parent.value && $self.parent.parent.value.length === 1}}',
                            fulfill: {
                              schema: {
                                'x-component': 'WfjtestDisabledRemove',
                              },
                            },
                            otherwise: {
                              schema: {
                                'x-component': 'WfjtestFormilyArrayRemove',
                              },
                            },
                          },
                        ],
                      },
                      val: {
                        type: 'string',
                        'x-decorator': 'WfjtestFormilyMobileFormItem',
                        'x-decorator-props': {
                          noStyle: true,
                        },
                        'x-component': 'WfjtestFormilyMobileTextarea',
                        'x-component-props': {
                          className: 'chioce_array_input',
                          autoSize: true,
                          autoFocus: !operationObs.isShow,
                          rows: 1,
                        },
                        'x-validator': [
                          { max: 50, message: '选项至多输入50个字符' },
                          { required: true, message: '选项不能为空' },
                          {
                            validator: (val: string, rule: IValidatorRules, ctx: any) => {
                              const parentArrData = ctx.form.getValuesIn(ctx.field.parent.parent.getState().path);
                              const findData = parentArrData.filter((i: string) => i === val && i !== '');
                              return findData.length < 2;
                            },
                            message: '选项不能重复',
                          },
                        ],
                        'x-reactions': [
                          {
                            dependencies: ['.index', '.index#index'],
                            fulfill: {
                              schema: {
                                'x-component-props': {
                                  placeholder: '{{"选项" + ($deps[1] + 1)}}',
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  properties: {
                    add: {
                      type: 'void',
                      title: '添加选项',
                      'x-component': 'WfjtestFormilyArrayAddition',
                      'x-component-props': {
                        type: 'link',
                        onClick: (e) => {
                          e.stopPropagation();
                          onFieldAdd();
                        }
                      },
                      'x-reactions': [
                        {
                          when: '{{$self.parent.parent.value && $self.parent.parent.value.length === 25}}',
                          fulfill: {
                            state: {
                              hidden: true,
                            },
                          },
                          otherwise: {
                            state: {
                              hidden: false,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
            }}
          />
        ) : (
          <SchemaField
            schema={{
              type: 'void',
              properties: {
                [`${fieldsSchema.name}_value`]: {
                  type: 'string',
                  'x-disabled': true,
                  'x-decorator': 'WfjtestFormilyMobileFormItem',
                  'x-component': 'WfjtestFormilyMobileInput',
                },
              },
            }}
          />
        )}
      </BaseField>
    </StyledChoice>
  );
});
export default ChoiceField;

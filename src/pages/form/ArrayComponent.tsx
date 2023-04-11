import React, {useEffect, useRef, useState} from 'react';
import { PopoverRef } from 'antd-mobile/es/components/popover';
import {useIonViewDidEnter, useIonViewWillLeave} from '@ionic/react';
import {Keyboard} from "@capacitor/keyboard";
import { ArrayField as ArrayFieldType } from '@formily/core';
import { observable } from '@formily/reactive';
import { observer, useField } from '@formily/react';
import SchemaField from '@/pages/form/genFormSchema';
import {StyledAddButton, StyledOperating, StyledOperatingItem, StyleoPreviewOperationListBtn, StyledOperatingBtnWarp, StyledAddQuestionPopover} from '@/assets/styleds/Form';
import { genFountSchema, getModuleId } from './util/DealData';
import { ReactComponent as ThreeDotIconfrom }  from "@/assets/icons/svg/dot.svg";
import { formFieldsTypes, FormTypes, formTypes } from '@/pages/form/config';
import {operationObs} from "@/pages/form/OperationList";

export const arrComponentObs: {
  activateIndex: number;
  isShow: boolean;
} = observable({
  activateIndex: -1,
  isShow: false,
});
const ArrayComponent = observer(({ onComponentAdd, onFieldAdd, }) => {
  const popoverRef = useRef<PopoverRef>(null);
  const field = useField<ArrayFieldType>();
  let timer: any = null;
  useIonViewDidEnter(() => {
    if (popoverRef.current) {
      popoverRef.current.hide();
    }
    // 等结构绘制完成后在弹窗，计算位置
    if (arrComponentObs.isShow) {
      if (popoverRef.current) {
        popoverRef.current.show();
      }
    } else if (popoverRef.current) {
        popoverRef.current.hide();
      }
  });
  useIonViewWillLeave(() => {
    arrComponentObs.isShow = false;
    if (popoverRef.current) {
      popoverRef.current.hide();
    }
    if (timer) {
      clearTimeout(timer);
    }
  });

  Keyboard.addListener('keyboardWillShow', e => {
    if (popoverRef.current) {
      popoverRef.current.hide();
    }
  });
  const handleClick = (item: FormTypes) => {
    field.push({
      typeInfo: item,
    });
    arrComponentObs.activateIndex = field.value.length - 1 || 0;
    // 关闭操作弹窗
    operationObs.isShow = false;
    arrComponentObs.isShow = false;
    onComponentAdd();
  };
  const createOperating = () => (
    <StyledOperating>
      {formTypes.map((i, index) => (
        <StyledOperatingItem
          onClick={() => {
            handleClick(i);
          }}
          key={i.type}>
          <span>{i.icon}</span>
          <span>{i.name}</span>
        </StyledOperatingItem>
      ))}
    </StyledOperating>
  );
  return (
    <div>
      {field.value?.map((i, index) => {
        const name = index;
        const components: any = {
          // 默认单选
          [formFieldsTypes.choice]: 'WfjtestChoiceField',
          [formFieldsTypes.answer]: 'WfjtestAnswerField',
        };
        return (
          <div
            onClick={() => {
              arrComponentObs.activateIndex = index;
              arrComponentObs.isShow = false;
            }}
            key={name}
            style={{ display: 'flex-block', marginBottom: 10 }}>
            {arrComponentObs.activateIndex === index ? (
              <SchemaField
                schema={{
                  type: 'void',
                  properties: {
                    [name]: {
                      type: 'void',
                      'x-component': 'WfjtestFormilyMobileFormGrid',
                      'x-component-props': {
                        columnGap: 4,
                      },
                      properties: {
                        info: {
                          type: 'string',
                          'x-component': components[i?.typeInfo?.type],
                          'x-component-props': {
                            placeholder: '请输入问题',
                            optionField: field,
                            onFieldAdd,
                          },
                        },
                      },
                    },
                  },
                }}
              />
            ) : (
              <StyledOperatingBtnWarp>
                <SchemaField
                  schema={{
                    type: 'void',
                    properties: {
                      info: genFountSchema(i, getModuleId(), index, true),
                    },
                  }}
                />
                <StyleoPreviewOperationListBtn onClick={(e) => {
                  e.stopPropagation();
                  operationObs.isShow = true;
                  arrComponentObs.activateIndex = index;
                  arrComponentObs.isShow = false;
                }}>
                  <ThreeDotIconfrom />
                </StyleoPreviewOperationListBtn>
              </StyledOperatingBtnWarp>
            )}
          </div>
        );
      })}

      <StyledAddQuestionPopover visible={arrComponentObs.isShow} ref={popoverRef} content={createOperating()} trigger="click" placement="bottom-start">
        <StyledAddButton onClick={() => {
          operationObs.isShow = false;
          timer = setTimeout(() => {
            arrComponentObs.isShow = !arrComponentObs.isShow;
          } , 200);
        }}>
          添加问题
        </StyledAddButton>
      </StyledAddQuestionPopover>
    </div>
  );
});
export default ArrayComponent;

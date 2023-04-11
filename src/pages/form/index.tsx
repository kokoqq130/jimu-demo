import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard } from '@capacitor/keyboard';
import { useHistory, useParams } from 'react-router';
import { observer, Observer, Schema } from '@formily/react';
import { observable } from '@formily/reactive';
import { createForm, Form,  onFormSubmitValidateFailed } from '@formily/core';
import { IonContent, IonHeader, IonPage, useIonAlert, useIonViewWillEnter, useIonViewWillLeave  } from '@ionic/react';
import { StyledEditFooter, StyledFormWarp, StyleFooter } from '@/assets/styleds/Form';
import { StyledFormilyForm } from '@/assets/styleds/FormilyAntd';
import { StyledFormilyMobileBottomSubmit } from '@/assets/styleds/FormilyAntdMobile';
import AppBar from '@/components/AppBar';
import SchemaField from './genFormSchema';
import { isArrLen } from '@/utils';
import { arrComponentObs } from '@/pages/form/ArrayComponent';
import { operationObs } from '@/pages/form/OperationList';

const CustomForm = observer(() => {
  const history = useHistory();
  const contentRef = useRef<HTMLIonContentElement>(null);

  const formData = {
    type: 'object',
    properties: {
      formTitles: {
        type: 'void',
        'x-component': 'WfjtestFormilyMobileFormGrid',
        'x-component-props': {
          columnGap: 4,
        },
        properties: {
          title: {
            type: 'string',
            'x-decorator': 'WfjtestFormilyMobileHFormitem',
            'x-decorator-props': {
              feedbackLayout: 'loose',
              tooltip: '请输入表单标题',
              gridSpan: 4,
            },
            'x-component': 'WfjtestFormilyMobileHTextarea',
            'x-component-props': {
              placeholder: '请输入表单标题',
              autoSize: true,
              rows: 1,
            },
            'x-validator': [
              { required: true, message: '表单标题不能为空' },
              { max: 20, message: '标题至多输入20个字符' },
            ],
          },
          desc: {
            type: 'string',
            'x-decorator': 'WfjtestFormilyMobileHFormitem',
            'x-decorator-props': {
              gridSpan: 4,
            },
            'x-component': 'WfjtestFormilyMobileHDesc',
            'x-component-props': {
              placeholder: '添加描述',
              autoSize: true,
              rows: 1,
            },
            'x-validator': [{ max: 200, message: '表单描述至多输入200个字符' }],
          },
        },
      },
    },
  };
  const detailRef = useRef();
  const saveRef = useRef();
  const [presentAlert, dismiss] = useIonAlert();
  const doCloseOrBack = async () => {
    await dismiss();
    history.go(-1);
  };
  const form: any = useMemo(
    () =>
      createForm({
        effects() {
          // eslint-disable-next-line consistent-return
          onFormSubmitValidateFailed(async (errorForm: Form) => {
            await dismiss();
            const { errors } = errorForm;
            for (let i = 0; i < errors.length; i += 1) {
              const errorIndexs = errors[i]?.path?.split('.');
              if (errorIndexs && isArrLen(errorIndexs) && errorIndexs.length > 1) {
                const errorIndex: number = Number(errorIndexs[1]);
                if (!Number.isNaN(errorIndex)) {
                  arrComponentObs.activateIndex = errorIndex;
                  return false;
                }
              }
            }
          });
        },
      }),
    [dismiss],
  );
  useIonViewWillEnter(() => {
    if (detailRef.current) {
      detailRef.current.hidden = true;
    }
    arrComponentObs.activateIndex = -1;
  });
  useIonViewWillLeave(() => {
    operationObs.isShow = false;
  });
  const scrollIntoView = () => {
    const top: number | undefined = document?.activeElement?.getBoundingClientRect()?.top;
    const integerTop: number = top ? Math.floor(top) - 110 : 0;
    if (integerTop && contentRef.current) {
      contentRef.current?.scrollByPoint(0, integerTop, 200);
    }
  };
  Keyboard.addListener('keyboardWillShow', e => {
    // 元素聚焦时隐藏底部操作按钮
    if (saveRef.current) {
      saveRef.current.hidden = true;
    }
    // arrComponentObs.isShow = false;
  });
  Keyboard.addListener('keyboardDidShow', e => {
    if (detailRef.current) {
      detailRef.current.hidden = false;
    }
    scrollIntoView();
  });

  Keyboard.addListener('keyboardWillHide', () => {
    if (detailRef.current) {
      detailRef.current.hidden = true;
    }
  });
  Keyboard.addListener('keyboardDidHide', () => {
    if (saveRef.current) {
      saveRef.current.hidden = false;
    }
  });
  const SchemaState = new Schema({
      type: 'object',
      properties: {
        arrayList: {
          type: 'array',
          'x-component': 'WfjtestArrayComponent',
          'x-component-props': {
            onComponentAdd: () => {},
            onFieldAdd: () => {},
          },
        },
      },
    },
  );
  const customFormItems = observable(SchemaState);
  const onSubmit = async (values: any) => {
    console.info(values);
  };
  const doSubmit = async () => {
    await form.submit(onSubmit);
  };
  // 退出保存
  const showCloseTips = () => {
    presentAlert({
      header: '提示',
      message: '是否保存当前表单内容？',
      translucent: true,
      buttons: [
        {
          text: '保存',
          cssClass: 'ion-alert-confirm',
          handler: doSubmit,
        },
        {
          text: '不保存',
          cssClass: 'ion-alert-confirm',
          handler: doCloseOrBack,
        },
        {
          text: '取消',
          handler: dismiss,
          cssClass: 'ion-alert-cancel',
        },
      ],
    });
  };

  const onClose = () => {
    const isChange = form.modified;
    arrComponentObs.isShow = false;
    if (isChange) {
      showCloseTips();
    } else {
      doCloseOrBack();
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <AppBar onBack={onClose} title={`新建表单`} />
      </IonHeader>
      <IonContent
        scrollEvents
        onIonScrollStart={() => {
          arrComponentObs.isShow = false;
        }}
        ref={contentRef}
      >
        <StyledFormilyForm form={form}>
          <Observer>
            <StyledFormWarp>
              <SchemaField schema={formData} />
              <SchemaField schema={customFormItems} />
            </StyledFormWarp>
          </Observer>
          <StyledEditFooter ref={detailRef}>
            <div
              onClick={() => {
                arrComponentObs.activateIndex = -1;
              }}>
              完成
            </div>
          </StyledEditFooter>
          <StyleFooter ref={saveRef}>
            <StyledFormilyMobileBottomSubmit onSubmit={onSubmit}>
              保存
            </StyledFormilyMobileBottomSubmit>
          </StyleFooter>
        </StyledFormilyForm>
      </IonContent>
    </IonPage>
  );
});
export default CustomForm;

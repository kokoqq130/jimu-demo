import React from 'react'
import {observer} from '@formily/react';
import BaseField from "@/pages/form/BaseField";
import {StyledAnswer} from "@/assets/styleds/Form";
import {ArrayField as ArrayFieldType} from "@formily/core/esm/models/ArrayField";

export interface IAnswerFieldProps {
  onChange?: (value: any, options: any) => void
  value?: any
  optionField: ArrayFieldType
}

const AnswerField: React.FC<React.PropsWithChildren<IAnswerFieldProps>> =observer(({ optionField }) => {

  return (
      <StyledAnswer>
        <BaseField optionField={optionField} onChangeRequired={(e) => {
        }}>
          <div className="answer-warp">待填写人输入</div>
        </BaseField>
      </StyledAnswer>
  )
});
export default AnswerField
import {FormItem, FormGrid, Submit, FormLayout,  } from '@formily/antd-mobile';
import { Radio, Checkbox, Input } from '@formily/antd';
import styled from "@emotion/styled";
import { Button } from 'antd';

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

export const StyledFormilyMobileInput = styled(Input)`
  line-height: 48px;
  --adm-font-size-9: 15px;
  overflow: hidden;
  input::placeholder {
    color: #D9d9d9;
    font-size: 15px;
  }
  input {
    color: #262626;
    font-size: 15px;
  }
`

export const StyledFormilyMobileTextarea = styled(TextArea as any)`
  font-weight: 600;
  font-family: var(--adm-font-family);
  resize: none;
  overflow: hidden;
  flex: auto;
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  font-size: var(--font-size);
  max-height: 100%;
  padding: 0;
  margin: 0;
  color: var(--color);
  line-height: 1.5;
  background: transparent;
  border: 0;
  min-height: unset !important;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  ::placeholder {
    font-weight: 400;
  }
  &:active,
  &:focus,
  &:hover {
    outline: none;
    //border: none;
    box-shadow: none;
  }
`
export const StyledFormilyMobileCheckboxGroup = styled(CheckboxGroup as any)`
  
`
export const StyledFormilyMobileRadioGroup = styled(RadioGroup as any)`
`
export const StyledFormilyMobileHTextarea = styled(StyledFormilyMobileTextarea as any)`
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  ::placeholder {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
`
export const StyledFormilyMobileHDesc = styled(StyledFormilyMobileHTextarea)`
  font-size: 15px;
  font-weight: 400;
  color: #999999;
  ::placeholder {
    font-size: 15px;
  }
`
export const StyledFormilyMobileHInput = styled(StyledFormilyMobileInput)`
  input::placeholder {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  input {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
`
export const StyledFormilyMobileFormItem = styled(FormItem)`
  padding: 0;
`
export const StyledFormilyMobileHFormitem = styled(StyledFormilyMobileFormItem)`
  padding: 0 20px;
  .adm-formily-item-error-help {
    text-align: center;
  }
  :last-child {
    .adm-list-item-content {
      border-bottom: none;
    }
  }
  .adm-list-item-content{
    border-bottom: 0.5px solid #EBEBEB;
  }
`
export const StyledFormilyMobileFormGrid = styled(FormGrid)`
  gap: 0 !important;
  margin: 10px auto;
  border-radius: 12px;
  overflow: hidden;
`
export const StyledFormilyMobileSubmit = styled(Submit)`
  --background-color: #FB4B42 !important;
  border: none !important;
  border-radius: 12px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`
export const StyledFormilyMobileBottomSubmit = styled(StyledFormilyMobileSubmit)`
`
// 表单属性容器
export const StyledFormilyPropertyWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
  .ant-checkbox-wrapper {
    color: #757575
  }
`

export const StyledButton = styled(Button)<{ dis?: boolean }>`
  height: 50px;
  background: #F5F5F5;
  border-radius: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #262626;
  border: none;
  opacity: ${ props =>  props.dis ? 0.35 : 1 };
  :active {
    color: ${ props =>  props.dis ? '#262626' : '#FB4B42' };
    border-color: ${ props =>  props.dis ? '#262626' : '#FB4B42' };
  }
`
export const StyledFormLayout = styled(FormLayout)`
  --border-bottom: none;
  --border-top: none;
  position: relative;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  .adm-formily-item-label-content {
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    color: #262626;
    width: 100%;
    padding: 0 26px;
  }
  .form-preview-textarea-warp {
    height: 44px;
    font-size: 14px;
    line-height: 20px;
  }
`
export const StyledPrimaryButton = styled(StyledButton)`
  background: #FB4B42;
  color: #ffffff;
`
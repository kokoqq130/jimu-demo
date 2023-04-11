import { Form, ArrayItems } from '@formily/antd';
import styled from "@emotion/styled";


const { SortHandle, Addition, Remove } = ArrayItems;

export const StyledFormilyForm = styled(Form)`
  overflow: unset !important;
  .form-preview-title {
    color: #ccc;
  }
  .form-preview-title-requied {
    color: red;
    position: absolute;
    left: -11px;
    top: 2px;
  }
  height: 100%;
  form {
    height: 100%;
    position: relative;
  }
`
export const StyledFormilyArrayWarp = styled.div`
  display: flex;
  margin-left: 37px;
  align-items: center;
`
export const StyledFormilyArrayBase = styled(ArrayItems)`
  .ant-btn-dangerous {
    &:hover,
    &:focus,
    &:active {
      border: none;
    }
  }
  .ant-btn-dangerous {
    border: none;
  }
`
export const StyledFormilyArraySortHandle = styled(SortHandle as any)`
`
export const StyledFormilyArrayAddition = styled(Addition as any)`
  text-decoration: none;
  font-size: 14px;
  -webkit-touch-callout: none !important;
  user-select: none !important;
  font-weight: 500;
  width: 56px;
  text-align: left;
  border: none;
  box-shadow: none;
  color: #fa4b42;
  z-index: 100;
  svg {
    display: none;
  }
  background-repeat: no-repeat !important;
  background-position: 46px center !important;
  background-size: 16px !important;
  padding-left: 60px;
  box-sizing: border-box;
  &:hover,
  &:focus,
  &:active{
    color: #fa4b42;
    border: none;
    background-color: #fff;
    box-shadow: none;
  }
  &:after {
    content: "";
  }
`
export const StyledFormilyDisabledRemove = styled.span`
  color: #BFBFBF;
  font-size: 16px;
  margin-right: 6px;
  height: 44px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

`
export const StyledFormilyArrayRemove = styled(Remove  as any)`
  margin-right: 6px;
  svg {
    display: none;
  }
  height: 44px;
  width: 20px;
  background-repeat: no-repeat !important;
  background-position: left center !important;
  background-size: 20px !important;
  box-sizing: border-box;
`
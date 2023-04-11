import styled from "@emotion/styled";
import {
  StyledButton, StyledFormilyMobileCheckboxGroup,
  StyledFormilyMobileFormItem,
  StyledFormilyMobileInput, StyledFormilyMobileRadioGroup, StyledFormilyMobileTextarea,
  StyledPrimaryButton
} from "@/assets/styleds/FormilyAntdMobile";
import {StyleFooter} from "@/assets/styleds/Form";
import {Form} from "@formily/antd";

export const StyledEditPreviewBase = styled.div`
  .adm-swiper {
    min-height: calc(100vh - 88px);
    overflow: unset !important;
  }
  .my-tabs-warp {
    --active-line-color: #fb4b42;
    --fixed-active-line-width: 20px;
    --active-line-border-radius: 2px;
    --active-line-height: 4px;
    --adm-color-primary: #262626;
    color: #fb4b42;
    .adm-tabs-header {
      background: #fff;
      color: #595959;
      border: none;
      .adm-tabs-tab-active {
        font-weight: 600;
      }
      .adm-tabs-tab {
        font-size: 15px;
      }
    }
  }
  .active-hidden {
    height: 0;
    display: none;
  }
`
export const StyledEditPreview = styled(StyledEditPreviewBase)`

  min-height: calc(100vh - 88px);
  overflow: unset !important;
`
export const StyledEditPreviewButtonPri = styled(StyledPrimaryButton)`
  width: calc(50% - 12px);
  margin: 10px 0 0 12px;
  &:hover,
  &:focus,
  &:active {
    background: #FB4B42;
    color: #ffffff;
    border: none;
  }
`
export const StyledEditPreviewButton = styled(StyledButton)`
  margin: 10px 0 0 0;
  width: 50%;
  &:hover,
  &:focus,
  &:active {
    background: #F5F5F5;
    color: #262626;
    border: none;
  }
`
export const StyledEditPreviewOneButton = styled(StyledEditPreviewButtonPri)`
  width: 100%;
  margin-left: 0;
`
export const StyledPreviewWarp = styled.div`
  padding: 0 16px 104px 16px;
  min-height: calc(100vh - 144px);
`
export const StyledPreviewTitleWarp = styled.div`
  background: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 16px;
  text-align: center;
  margin: 12px auto;
  .preview-title {
    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    align-items: center;
    color: #262626;
    padding: 12px 0 5px 0;
    border-bottom:  0.5px solid #EBEBEB;
  }
  .preview-desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    align-items: center;
    color: #999999;
    padding: 12px 0;
  }
`

export const StyledFormilyPreviewForm = styled(Form)`
  height: 100%;
  form {
    height: 100%;
    position: relative;
  }
`
export const StyledFormilyMobilePreviewFormItem = styled(StyledFormilyMobileFormItem)<{ indexStr?: string }>`
  .adm-formily-item-label-content {
    overflow: unset;
    white-space: break-spaces;    
  }
  .adm-list-item-content-main {
    width: 100%;
  }
  &:after {
    content: "${ props => {  return props.indexStr}}";
    color: #000;
    font-size: 15px;
    line-height: 21px;
    font-weight: 600;
    position: absolute;
    top: 12px;
    left: 0;
    padding: 0 8px 0 16px;
  }
`
export const StyledFormilyMobilePreviewTextarea = styled(StyledFormilyMobileTextarea)`
  background: #FFFFFF;
  border: 0.5px solid #EBEBEB;
  border-radius: 8px;
  line-height: 22px;
  padding: 12px;
  margin-left: 25px;
  width: calc(100% - 25px);

  color: #BFBFBF;
  ::placeholder {
    color: #BFBFBF;
    font-size: 15px;
  }
  textarea::placeholder {
    color: #BFBFBF;
    font-size: 15px;
  }
`
export const StyledFormilyMobilePreviewCheckboxGroup = styled(StyledFormilyMobileCheckboxGroup)`
  margin-left: 25px;
  .ant-checkbox-group-item {
    display: block;
  }
  .ant-checkbox {
    display: inline-block;
  }
`
export const StyledFormilyMobilePreviewRadioGroup = styled(StyledFormilyMobileRadioGroup)`
  margin-left: 25px;
  .ant-radio-wrapper {
    display: block;
    margin-bottom: 10px;
    line-height: 18px;
  }
`
export const StyledPreviewBaseTitle = styled.span`
  span {
    margin-right: 8px;
  }
`
export const StyledAnswerStatisicsPage = styled.div`
  .page-warp {
    margin: 8px;
    display: flex;
    justify-content: right;
  }
`
export const StyledRecordListWarp = styled.div`
  .adm-list-body {
    background-color: #f5f5f5;
    border-bottom: none;
  }
  .adm-list-item-content-main {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #262626;

    .time {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #999999;
    }
  }
`
export const StyledUserRecord = styled.div`
  height: 100%;
  .count-warp {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* #757575 */

    color: #757575;
    margin: 16px 0 0 16px;
  }
  .record-info-lists {
    background: #FFFFFF;
    border-radius: 12px;
    margin: 8px 16px 16px 16px;
    padding: 16px 16px 16px 16px;
  }
  .record-info-lists-warp {
    min-height: calc(100% - 124px);
  }
  .record-info-warp {
    margin-bottom: 16px;
    .content-warp {
      width: calc(100% - 30px);
      white-space: break-spaces;
    }
  }
  .record-info-title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 6px;
    display: flex;
    align-items: baseline;
    line-height: 22px;

    /* #262626 */

    color: #262626;
  }
  .record-info-value {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-indent: 14px;
    display: flex;
    align-items: center;

    /* #999999 */

    color: #999999;

  }
`

export const StyledListFooter = styled.div`
  padding: 0 10px 10px 10px;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  text-align: center;
  margin-top: -24px;
`;
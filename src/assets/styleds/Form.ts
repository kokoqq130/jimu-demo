import styled from '@emotion/styled';
import { Popup, Popover } from 'antd-mobile';
import { Spin } from 'antd';


export const StyledAddButton = styled.div`
  width: 100%;
  border: none;
  margin-top: 12px;
  border-radius: 12px;
  color: #FB4B42;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  
`
export const StyledFormWarp = styled.div`
  //height: calc(100% - 52px)
  padding: 0 16px 120px 16px;
  min-height: 100%;
`
export const StyleFooter = styled.div`
  height: 104px;
  position: sticky;
  bottom: 0;
  width: calc(100%);
  margin: 0 auto;
  padding: 10px 24px;
  z-index: 101;
  background: #fff;
  border: 0.5px solid #EBEBEB;
  box-sizing: border-box;
`
export const StyleRecordFooter = styled(StyleFooter)`
`
export const StyledOperating = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
`
export const StyledOperatingItem = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin: 0 12px;
`
export const StyledBase = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  .Wfjtest_base_formitem {
    :last-child {
      .adm-list-item-content {
        border-bottom: none;
      }
    }
  }
  
  .Wfjtest_choice_formitem {
    .adm-list-item-content{
      border-bottom: 0.5px solid #EBEBEB;
    }
  }
  .fields-inner-warp {
    display: flex;
    padding: 16px 16px 0 16px;
  }
  .view-index-warp {
    margin-right: 8px;
    font-weight: 600;
    color: #000;
    width: 20px;
    line-height: 2;
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: -6px;
    }
  }
  .base-fields-one-warp {
    display: flex;
    //min-height: 46px;
    .adm-list-item-content-main {
      padding: 0;
    }
  }
  .adm-formily-item.adm-list-item {
    padding: 0;
    flex-grow: 2;
    margin-right: 8px;
  }
  .base-fields-warp {
    width: 100%;
  }
`

export const StyledAnswer = styled(StyledBase)`
  .base-fields-one-warp {
    .adm-list-item-content{
      border-bottom: none;
    }
  }

  .answer-warp {
    color: #D9d9d9;
    background: #FFFFFF;
    padding: 0 12px;
    height: 44px;
    border: 0.5px solid #EBEBEB;
    border-radius: 8px;
    line-height: 44px;
    box-sizing: border-box;
    /* #EBEBEB */
    margin: 6px 11px 0 37px;
  }
`
export const StyledChoice = styled(StyledBase)`
  .adm-list-item-content-main {
    padding: 6px 0;
  }
  .chioce_array_input {
    border-bottom: 0.5px solid #EBEBEB;
    padding: 0;
  }
`
export const StyledErrorIcon = styled.span`
  position: absolute;
  top: 0;
  left: -10px;
  color: #f00;
`

export const StyleoOperationListBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
export const StyleoOperationList = styled.div`
  display: flex;
  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 12px;
    svg {
      margin-bottom: 6px;
    }
  }
  .gray {
    color: #ccc;
  }
`

export const StyledInvitePopup = styled(Popup)`
  .adm-popup-body-position-bottom {
    margin: 16px 16px 102px 16px;
    width: calc(100% - 32px);
    border-radius: 12px;
    background-color: #fff;
    height: 149px;
    box-sizing: border-box;
    .title {
      font-weight: 500;
      font-size: 15px;
      line-height: 21px;
      /* identical to box height */
      text-align: center;
      color: #000000;
      margin: 20px 38px;
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: revert;
      margin: 20px 38px;
      text-align: center;
      .btn {
        display: flex;
        flex-direction: column;
      }
      img {
        width: 36px;
        margin: 0 auto 7px auto;
      }
    }
    .close-btn {
      width: 100%;
      position: absolute;
      bottom: -62px;
      background-color: #fff;
      border-radius: 12px;
      height: 50px;
      line-height: 50px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #262626;
    }
  }
`
export const StyledAddQuestionPopover = styled(Popover)`
  margin: -12px 0 0 20px;
  .adm-popover-inner {
    border-radius: 12px;
  }
  .adm-popover-arrow {
    left: 12px !important;
    top: -6px !important;
  }
`
export const StyledStatisticsWarp = styled.div`
  background: #fff;
  border-top: solid 0.5px #EBEBEB;
  .my-tabs-warp-stati {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    .adm-tabs-tab-wrapper {
      padding: 0;
    }
    .adm-tabs-header {
      margin: 0 60px;
      background: #eee;
      height: 32px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      border-bottom: none;
    }
    .adm-tabs-tab {
      padding: 0 26px;
      line-height: 26px;
      margin: 2px;
      font-size: 13px;
      
    }
    .adm-tabs-tab-line {
      display: none;
    }
    .adm-tabs-tab-active {
      background-color: #fff;
      border: 0.5px solid rgba(0, 0, 0, 0.04);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
      border-radius: 6.93px;
      color: #000
    }
  }
`

export const StyledStatisticsInfo = styled.div`
  min-height: calc(100vh - 255px);
  h3 {
    font-size: 13px;
    line-height: 36px;
    display: flex;
    align-items: center;
    color: #757575;
    background-color: #f5f5f5;
    height: 36px;
    padding: 0 16px;
  }
`
export const StyledStatisticsData = styled.div`
  padding: 0 16px 16px 16px;
  h4 {
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    display: flex;
    align-items: baseline;
    color: #262626;
    margin-bottom: 5px;
    .index {
      margin-right: 10px;
    }
    .title {
      width: calc(100% - 30px);
      white-space: break-spaces;
    }
  }
  .results {
    font-size: 13px;
    display: flex;
    align-items: center;
    /* #757575 */
    color: #757575;
    padding-left: 4px;
    margin-bottom: 10px;
  }
  th.ant-table-cell {
    font-weight: 600;
    font-size: 13px;
    color: #181819;
    background: #F4F4F8;
  }
`

export const StyledEditFooter = styled.div`
  position: sticky;
  bottom: 0;
  width: calc(100%);
  margin: 0 auto;
  z-index: 110;
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #f0f0f1;
  text-align: right;
  color: #2878FF;
  svg {
    font-weight: 1000;
    margin-right: 6px;
    font-size: 20px;
  }
`
export const StyledOperatingBtnWarp = styled.div`
  position: relative;
  .preview-edit-operation {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`
export const StyleoPreviewOperationListBtn = styled(StyleoOperationListBtn)`
  position: absolute;
  right: 18px;
  top: 18px;
  
`
export const StyledSpin = styled(Spin)`
  min-height: calc(100vh - 144px);

`

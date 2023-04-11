import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Popup } from 'antd-mobile';
import {Button} from "antd";

export const StyledGlobal = css`
  * {
    ::-webkit-scrollbar {
      width: 6px;
      height: 4px;
    }

    ::-webkit-scrollbar-button {
      width: 6px;
      height: 0;
    }

    ::-webkit-scrollbar-track {
      background: 0 0;
    }

    ::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      border-radius: 3px;
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  .ant-message {
    z-index: 9999;
    top: 47vh;
  }
  .ant-spin-spinning {
    width: 100%;
    padding-top: 25%;
  }
  .adm-auto-center-content {
    text-align: center;
  }
  .adm-toast-mask .adm-toast-main {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    max-width: 300px;
  }
  :root:root {
    --adm-center-popup-background-color: #fff;
    --border-color: #d9d9d9;
    --adm-color-border: #d9d9d9;
  }
  .adm-dialog {
    .adm-center-popup-mask {
      background: rgba(0, 0, 0, 0.35) !important;
    }
    .adm-auto-center-content {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #000000;

    }
    .adm-dialog-button {
      font-weight: 400;
      font-size: 17px;
      line-height: 24px;
      /* identical to box height */
      color: #5C88C1;
    }
    .adm-dialog-footer .adm-dialog-action-row > .adm-dialog-button {
      padding: 14px;
    }
  }
  .default-my-dialog {
    .adm-button:not(.adm-button-default).adm-button-fill-none {
      --adm-color-primary: #fa4b42;
      font-size: 17px;
      border: none;
    }
    .adm-dialog-title {
      font-size: 16px;
      font-weight: 600;
    }
    .adm-auto-center-content {
      font-size: 14px;
      text-align: center;
    }
  }

  .empty-warp {
    display: flex;
    height: calc(100vh - 144px);
    flex-direction: column;
    justify-content: center;
    margin-top: -20px;
    color: #999;
  }
  .ion-alert-cancel {
    color: #595959 !important;
    font-weight: 400 !important;
  }
  .ion-alert-confirm {
    color: #537fb7 !important;
    font-weight: 400 !important;
  }
  .custom-message-class {
  }
  .ant-btn:hover, .ant-btn:focus {
    color: initial;
    border-color: transparent;
  }
  .ant-message-notice-content {
    background-color: rgba(0, 0, 0, 0.65);
    opacity: 0.92;
    border-radius: 6px;
    color:  #ffffff;  
    font-size: 16px;
  }
`;

export const StyledContinueVipDialog = css`
  padding-top: 0 !important;
  border-radius: 12px;
  .adm-dialog-content {
    padding: 0 !important;
  }
  .thinkAgain {
    width: 39%;
    height: 19%;
    position: absolute;
    bottom: 8%;
    left: 9%;
  }
  .activateNow {
    width: 39%;
    height: 19%;
    position: absolute;
    bottom: 8%;
    right: 7%;
  }
`;
export const StyledBlockButton = css`
  border: 1.5px solid #fa4b42;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  height: 52px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #FB4B42;
`;

export const StyledAddButton = styled.div`
  ${StyledBlockButton};
  border: 1.5px dashed #BFBFBF;
  margin: 0 30px;
  width: calc(100% - 30px);
  svg {
    margin-right: 4px;
  }
`;
export const StyledPrimaryButton = styled.div`
  ${StyledBlockButton};
  background: #FB4B42;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
`;
export const StyledPopup = styled(Popup)`
  .adm-mask {
    background-color: rgba(0, 0, 0, 0.35) !important;
  }
  .adm-popup-body-position-bottom {
    overflow-y: scroll;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-sizing: border-box;
    padding: 70px 35px;
  }
`
export const StyledCartTypeTag = styled.span<{ backgroundColor?: string, marginLeft?: string }>`
  background-color: ${props => props.backgroundColor || '#DDF3FF'};
  margin-left: ${props => props.marginLeft || '0'};
  border-radius: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  padding: 2px 5px;
  color: ${props => props.color || '#00A7FF'};
`;
import styled from '@emotion/styled';
import { IonItemSliding } from '@ionic/react';
import {StyledPopup} from "@/assets/styleds/Global";
import { Button } from 'antd';

export const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 115px;
  color: #999999;
  font-size: 14px;
  line-height: 20px;
  .text {
    margin: 28px 0;
  }
  img {
    width: 70%;
  }
`

export const StyledUseButton = styled(Button)`
  position: absolute;
  right: 16px;
  bottom: 16px;
  border-radius: 16px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  color: #fb4b42;
  padding: 0;
  width: 74px;
  height: 30px;
  align-self: flex-end;
  line-height: 18px;
  font-weight: 500;
  font-size: 13px;
  &:disabled {
    border-color: #f5f5f5;
    color: #bfbfbf;
    &:focus,
    &:hover,
    &:active {
      background-color: #f5f5f5;
      border-color: #f5f5f5;
      color: #bfbfbf;
    }
  }
  &:focus,
  &:hover,
  &:active {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #fb4b42;
  }
`;
export const StyledListPopup = styled(StyledPopup)`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  bottom: 0;                                            
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 42px;
    color: #262626;
    margin-bottom: 16px;
  }
  img {
    margin-bottom: 30px;
  }
  .ant-list-item-meta-avatar {
    margin-inline-end: 6px!important;
  }
  .ant-list-item-meta-title {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #262626;
  }
  .ant-list .ant-list-item {
    padding: 0;
    margin-bottom: 30px;
  }
`
export const StyledMiniAddButtonSpan = styled.span`
  text-decoration: none;
  font-size: 16px;
  -webkit-touch-callout: none !important;
  user-select: none !important;
  font-weight: 500;
  width: 56px;
  text-align: center;
  border: none;
  color: #fa4b42;
  z-index: 100;
  &:hover,
  &:focus {
    color: #fa4b42;
  }
`;

export const StyledRecordItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  color: #d9d9d9;
  -webkit-touch-callout: none !important;
  user-select: none !important;
  &:active,
  &:hover {
    color: #d9d9d9;
  }
  img {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    background: #ffffff;
    border: 0.5px solid #ebebeb;
    border-radius: 8px;
  }
  main {
    flex: 1;
    overflow: hidden;
  }
  .name,
  .desc {
    overflow: hidden;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc.short {
    width: calc(100% - 80px);
  }
  .name {
    display: flex;
    min-width: 80px;
    font-weight: 500;
    font-size: 16px;
    color: #262626;
    line-height: 22px;
    .tags {
      width: 88px;
      padding-left: 5px;
    }
    .adm-ellipsis {
      flex: 1;
    }
  }
  .desc,
  .time {
    font-size: 14px;
    line-height: 20px;
    color: #999999;
  }
  > svg {
    font-size: 18px;
    color: #d9d9d9;
  }
  .look {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 12px;
    span {
      margin-left: 3px;
    }
  }
`;
export const StyledSwipeItem = styled(IonItemSliding)`
  width: calc(100% - 32px);
  margin: 0 16px 15px;
  border-radius: 15px;
  ion-item {
    --padding-start: 0;
    --inner-padding-end: 0;
  }
  .item {
    --inner-border-width: 0 0 0 0;
  }
  .item-options-ios.item-options-end {
    border-bottom-width: 0;
  }
`;
export const StyledFormAddWarp = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 12px;
  background: #f5f5f5;
  overflow: hidden;
  z-index: 100;
  .left {
    display: flex;
    align-items: center;
    line-height: 14px;
    color: #262626;
    font-size: 16px;
    font-weight: 500;
    .count {
      font-size: 13px;
      line-height: 18px;
      color: #999999;
      margin-left: 3px;
    }
    .iconTips {
      padding: 6px 4px;
      font-size: 14px;
      color: #999999;
    }
    .adm-image {
      margin-left: 2px !important;
    }
  }
`;

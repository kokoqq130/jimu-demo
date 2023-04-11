import styled from '@emotion/styled';
import { IonModal } from '@ionic/react';

const StyledRetraction = styled.div`
  display: flex;
  align-items: center;
  // padding: 7px 13px;
  border: 1px solid #ebebeb;
  border-radius: 30px;
  height: 32px;
  cursor: pointer;
  .divide {
    width: 0;
    height: 18px;
    border: 1px solid #EBEBEB;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 32px;
  }
`;

export const StyledModal = styled(IonModal)`
  align-items: flex-end;
  --width: 100%;
  --height: 230px;
  --border-radius: 12px 12px 0 0;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  ion-header {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
    background: #F5F5F5;
    .divide {
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      width: calc(100% - 40px);
      height: 0.5px;
      background: #EBEBEB;
    }
  }
  ion-content {
    --background: #F5F5F5;
    div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 20px;
    }
    .deal-icon {
      width: 50px;
      font-size: 12px;
      text-align: center;
    }
  }
  ion-footer {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      height: calc(55px + env(safe-area-inset-bottom));
      padding-bottom: env(safe-area-inset-bottom);
      color: #262626;
      background: #fff;
      &:active {
        background: #e9e9e9;
      }
    }
  }
`
export default StyledRetraction;

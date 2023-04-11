import styled from '@emotion/styled';
import { IonHeader } from '@ionic/react';

export const StyledAppBar = styled(IonHeader)`
  .back-button-disabled {
    opacity: 1;
  }
  .title-default {
    padding-inline-end: 100px;
  }
  ion-toolbar {
    --padding-end: 10px;
  }
  ion-toolbar:last-of-type {
    --border-width: 0;
  }
  ion-icon {
    font-size: 26px;
  }
  ion-button {
    min-width: 44px;
    height: 44px;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    --border-radius: 50%;

    svg:not(:root) {
      overflow: visible;
    }
    svg {
      width: 18px;
      height: 18px; 
    }
  }
  .left {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    height: 38px;
    overflow: hidden;
    font-size: 24px;
  }
  .border-radius {
    border-radius: 50%;
  }
`;

export const StyledAppBarTitle = styled.b`
  font-size: 17px;
  color: #262626;
  font-weight: 600;
  white-space: nowrap;
`;

export const StyledAppBarCancel = styled.b`
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

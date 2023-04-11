import React, { FC, ReactNode } from 'react';
import { IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import Retraction  from './Icons';
import { ReactComponent as BackLeftIcon } from '@/assets/icons/svg/backLeft.svg';
import { StyledAppBar } from '@/assets/styleds/appBar';

interface AppBarProps {
  title: string;
  left?: ReactNode;
  children?: ReactNode;
  onBack?: () => void;
}

const AppBar: FC<AppBarProps> = ({ left, title, children, onBack }) => {
  const { location: { pathname } } = useHistory();
  const isHome = pathname === '/';
  return (
    <StyledAppBar translucent>
      <IonToolbar>
        <div onClick={onBack} className="left" slot="start">
          {/* 首页不显示返回按钮 */}
          {!isHome && (left || <BackLeftIcon />)}
        </div>
        <IonTitle>{children || title}</IonTitle>
        <div slot="end">
          <Retraction/>
        </div>
      </IonToolbar>
    </StyledAppBar>
  );
};

export default AppBar;

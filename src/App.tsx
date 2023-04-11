import React from 'react';
import {ConfigProvider, message} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import createCache from '@emotion/cache';
import { IonApp, setupIonicReact } from '@ionic/react';
import { CacheProvider, Global } from '@emotion/react';
import Router from './router';
import { StyledGlobal } from './assets/styleds/Global';
import 'antd/dist/antd.less';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact({
  mode: 'ios',
  swipeBackEnabled: false,
  animated: true,
});
const emotionCache = createCache({
  key: 'key',
  container: document.body,
});
message.config({
  duration: 1.5,
  maxCount: 3,
})
/* 初始化用户信息 */
// initUserInfo()
const App = () => (
  <CacheProvider value={emotionCache}>
    <IonApp>
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <Global styles={StyledGlobal} />
        <Router />
      </ConfigProvider>
    </IonApp>
  </CacheProvider>
);

export default App;

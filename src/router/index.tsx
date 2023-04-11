import React from 'react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import CustomForm from "@/pages/form";

const routers = [
  // 列表页
  { path: '/', element: <CustomForm /> },
];

const Router = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      {routers.map(d => (
        <Route key={d.path} path={d.path} exact render={() => d.element} />
      ))}
    </IonRouterOutlet>
  </IonReactRouter>
);

export default Router;

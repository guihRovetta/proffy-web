import React, { useContext } from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

interface CustomRouteProps {
  isPrivate?: boolean;
  path?: string | string[];
  exact?: boolean;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function CustomRoute({ isPrivate, ...rest }: CustomRouteProps) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

function Routes() {
  return (
    <Switch>
      <CustomRoute isPrivate path="/" exact component={Landing} />
      <CustomRoute path="/login" component={Login} />
      <CustomRoute path="/register" component={Register} />
      <CustomRoute path="/forgot" component={Forgot} />
      <CustomRoute isPrivate path="/study" component={TeacherList} />
      <CustomRoute isPrivate path="/give-classes" component={TeacherForm} />
      <CustomRoute isPrivate path="/profile" component={Profile} />
      <CustomRoute component={NotFound} />
    </Switch>
  );
}

export default Routes;

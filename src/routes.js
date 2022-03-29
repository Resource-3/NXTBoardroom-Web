import { lazy } from 'react';
import Layout from "./layout/index";


const Login = lazy(() => import('./pages/Auth/Login/Login'));
const Preferences = lazy(() => import('./pages/Preferences/Preferences'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const ForgetPassword = lazy(() => import ('./pages/Auth/ForgetPassWord/ForgetPassword'));
const ResetPassword = lazy(() => import ('./pages/Auth/ResetPassWord/ResetPassword'));

const routes = [
  {
    path: "/",
    component: <Login />,
    authenticate: false,
    exact: true
  },
  {
    path: "/*",
    component: <Layout />,
    authenticate: false,
    exact: true
  },
  {
    path: "/forgotpassword",
    component: <ForgetPassword />,
    authenticate: false,
    exact: true
  },
  {
    path:"/resetpassword",
    component :<ResetPassword />,
    authenticate:false,
    exact:true
  }
  
];

export const LayoutRoute = [
  {
    path: "/preferences",
    component: <Preferences />,
    exact: true,
    authenticate: false,
  },


  
];

export default routes;

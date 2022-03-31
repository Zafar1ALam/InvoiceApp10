/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import InvoiceTab from './src/navigations/InvoiceTab';
import TabNavigation from './src/navigations/TabNavigation';
import Analytics from './src/screens/Analytics';
import CI from './src/screens/CI';
import CIflatlist from './src/screens/CIflatlist';
import Cna from './src/screens/Cna';
import CreateInvoice from './src/screens/CreateInvoice';
import CustomerAdd from './src/screens/CustomerAdd';
import CustomerNameHere from './src/screens/CustomerNameHere';
import Customers from './src/screens/Customers';
import EditCompanyInfo from './src/screens/EditCompanyInfo';
import EditProfile from './src/screens/EditProfile';
import ForgotPasswordEmail from './src/screens/ForgotPasswordEmail';

import Home from './src/screens/Home';
import Invoices from './src/screens/Invoices';
import InvoiceView from './src/screens/InvoiceView';
import Login from './src/screens/Login';
import Pdf1 from './src/screens/Pdf1';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SignUp';
import Splash from './src/screens/Splash';
import VerificationCode from './src/screens/VerificationCode';


AppRegistry.registerComponent(appName, () => App);

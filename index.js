/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppRN from './navigation/AppRN';

// AppRegistry.registerComponent(appName, () => UseStates);
AppRegistry.registerComponent(appName, () => AppRN);

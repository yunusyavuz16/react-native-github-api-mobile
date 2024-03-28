/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './src/shared/utils/exceptionHandler/index.ts'

const ReduxProvider = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);

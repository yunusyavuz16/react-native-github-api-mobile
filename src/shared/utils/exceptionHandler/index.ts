import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const exceptionhandlerJS = (error: Error, isFatal: boolean) => {
  console.log('ExceptionhandlerJS: ', error, isFatal);
};

setJSExceptionHandler(exceptionhandlerJS, true);

const exceptionhandlerNative = (exceptionString: string) => {
  console.log('ExceptionhandlerNative: ', exceptionString);
};

setNativeExceptionHandler(exceptionhandlerNative, true, true);

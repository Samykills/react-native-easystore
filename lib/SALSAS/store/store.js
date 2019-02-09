// global.appContext = {};
var appContext = {};

export function setAppContext(context){
    appContext = context;
}

export function getAppContext(){
    return appContext;
}
import SALSAS from "../SALSAS/index";
class AppContext {
  static getAppContext() {
    return SALSAS.StoreAccessService.getStore();
  }

  static setAppContext(context) {
    SALSAS.StoreAccessService.setStore(context);
  }

  static initializeEventActivityListeners(currentContext, callback) {
    return SALSAS.StoreActivityListener.initializeEventActivityListeners(
      currentContext,
      callback
    );
  }

  static removeEventActivityListeners(listener) {
    SALSAS.StoreActivityListener.removeEventActivityListener(listener);
  }
}

export default AppContext;

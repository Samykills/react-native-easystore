import StoreAccessSetEventEmitter from "./storeAccessEventEmitter/storeAccessSetEventEmitter";
import * as Store from "../store/store";
class StoreAccessService {
  /**
   * Set the store to
   * @param {*} context
   */
  static setStore(context) {
    // global.appContext = context;
    Store.setAppContext(context);
    //event emitter here
    StoreAccessSetEventEmitter.emitEvent(context);
  }

  static getStore() {
    // return global.appContext;
    return Store.getAppContext();
  }
}

export default StoreAccessService;

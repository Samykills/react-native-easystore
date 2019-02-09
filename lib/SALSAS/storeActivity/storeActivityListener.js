import StoreActivitySetEventListener from "./storeActivityEventListener/storeActivitySetEventListener";
class StoreActivityListener {
  static initializeEventActivityListeners(currentContext, callback) {
   return StoreActivitySetEventListener.addListener(currentContext, callback);
  }

  static removeEventActivityListener(listener){
    StoreActivitySetEventListener.removeListener(listener);
  }
}

export default StoreActivityListener;

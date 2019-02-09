import EventEmitter from "react-native-eventemitter";
import * as StoreEvents from "../../storeEvents/storeEventConstant";

class StoreActivitySetEventListener {
  static addListener(currentContext, callback) {
    let listener = () => {
      callback(currentContext, res);
    };
    EventEmitter.on(StoreEvents.StoreSetEvent, listener);
    return listener;
  }

  static removeListener(listener) {
    EventEmitter.off(StoreEvents.StoreSetEvent, listener);
    console.log("Listener removed!");
  }
}
export default StoreActivitySetEventListener;

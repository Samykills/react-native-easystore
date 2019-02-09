import React from "react";
import EventEmitter from "react-native-eventemitter";
import * as StoreEvents from "../../storeEvents/storeEventConstant";

class StoreAccessSetEventEmitter {
  static emitEvent = context => {
    EventEmitter.emit(StoreEvents.StoreSetEvent, context);
  };
}

export default StoreAccessSetEventEmitter;

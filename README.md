# react-native-easystore

This library provides a store for use with reactJS/react-native applications, this library enables simple and easy data sharing between components, the state management of the component is left to the developers.

## Getting started

`$ npm install react-native-easystore --save`

## Initialization

The idea us to have a common store so that all the components of the APP can share from same data source.
Managing the state of the Component is left to developers.

To initalize the library we need to add the structure of store to be used by the application.

In your App.js file add

```javascript
import React from "react";
import { View, Text } from "react-native";
import AppContext from "react-native-easystore"; //<-- add this
import AppContextModel from "./appContextModel";

export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    AppContext.setAppContext(AppContextModel); //<-- add this
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Here is an example</Text>
      </View>
    );
  }
}
```

AppContextModel.js(can use any name for the file)
create a structure for your store here.

```javascript
const AppContextModel = {
  exampleData: {}
};

export default AppContextModel;
```

The store can be used to hold any data at anytime, However it is recommened that you maintain a structure for the store so as to only change the data relative to the component using the store, as all the changes made to store using SetAppContext() will be reflected in all the components that are listening to the store changes (i.e all the componenets initialzied with AppContext.initializeEventActivityListeners())

## Usage

```javascript
import React from "react";
import { View, Text, TextInput } from "react-native";
import AppContext from "react-native-easystore";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleData: {
        exampleName: "theStoreComponent"
      }
    };
  }

  exampleComponentTrigger(currentContext, appContext) {
    //use currentContext instead of this keyword
    currentContext.setState({ exampleData: appContext.exampleData });
  }

  componentDidMount() {
    this.exampleComponentListener = AppContext.initializeEventActivityListeners(
      this,
      this.exampleComponentTrigger
    );
  }

  componentWillUnmount() {
    AppContext.removeEventActivityListeners(this.exampleComponentListener);
  }

  inputHanlder = value => {
    let appContext = AppContext.getAppContext();
    appContext.exampleData = value;
    AppContext.setAppContext(appContext);
  };

  render() {
    return (
      <View>
        <TextInput onChange={this.inputHanlder} />
        <Text>{this.state.exampleData.exampleName}</Text>
      </View>
    );
  }
}

export default ExampleComponent;
```

##License

Free for use.

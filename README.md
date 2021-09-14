# react-native-swipe-to-choice

This library was created to make it easier to swipe cards to delete or various other options

## Installation

```sh
npm install react-native-swipe-to-choice
```


## Results
```Example with activeSwipeChoose is false```

![alt text](https://github.com/reizhafajrian/react-native-swipe-to-choice/blob/master/gif/Sep-14-202-16-17-59.gif "Example with activeSwipeChoose is false")

```Example with activeSwipeChoose is true```
![alt text](https://github.com/reizhafajrian/react-native-swipe-to-choice/blob/master/gif/Sep-14-2021-16-18-12.gif "Example with activeSwipeChoose is false")

## Usage

```js
import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import SwipeToChoice from 'react-native-swipe-to-choice';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SwipeToChoice
        styleButtonRight={{ backgroundColor: 'blue' }}
        onPressRight={() => alert('function right active')}
        onPressLeft={() => alert('function left active')}
        activeSwipeChoose={false}
        buttonRight={
          <View
            style={{
              backgroundColor: 'green',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text>Approve</Text>
          </View>
        }
        styleButtonLeft={{ backgroundColor: 'green' }}
        buttonLeft={
          <View
            style={{
              backgroundColor: 'red',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text>Delete</Text>
          </View>
        }
      >
        <View style={{ height: 100, justifyContent: 'center' }}>
          <Text style={{ justifyContent: 'center', alignSelf: 'center' }}>
            Hello World
          </Text>
        </View>
      </SwipeToChoice>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

```

## props
default is true,false is used when you don't want to call the function when the swipe occurs
```sh
  activeSwipeChoose={false} //
```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

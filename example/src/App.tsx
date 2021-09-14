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
        activeSwipeChoose={true}
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

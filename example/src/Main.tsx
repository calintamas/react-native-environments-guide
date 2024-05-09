import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getConfig} from './config';

export const Main = () => {
  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: getConfig().BACKGROUND_COLOR,
        },
      ]}>
      <Text>{getConfig().API_HOST}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

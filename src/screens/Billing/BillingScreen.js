import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BillingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Billing Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BillingScreen;

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const App = () => {
  const showToastHandler = () => {
    //show native android Toast
  };

  return (
    <View style={styles.app}>
      <Button
        style={styles.toastButton}
        title="Show Android Toast"
        onPress={showToastHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#F4DFBA',
    flex: 1,
    justifyContent:'center'
  },
});

export default App;

import React from 'react';
import { NativeModules, Button, StyleSheet, View} from 'react-native';

//Android Toast Bridge Access
const {ToastModule} = NativeModules;

const App = () => {

  const showToastHandler = () => {
    ToastModule.showToast("Hello, it's a native Android message!")
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

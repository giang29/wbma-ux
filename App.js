import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from './styles/GlobalStyles';
import List from './components/List';

const App = () => (
  <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <List/>
  </SafeAreaView>
);

export default App;

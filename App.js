import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from './styles/GlobalStyles';
import List from './components/List';
import Header from './components/Header';

const App = () => (
  <SafeAreaView style={GlobalStyles.droidSafeArea}>
    <Header />
    <List/>
  </SafeAreaView>
);

export default App;

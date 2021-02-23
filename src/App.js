import React from 'react';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
      <SearchForm />
    </MuiThemeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import UseStateComponent from './components/UseStateComponent';
import EventComponent from './components/EventComponent';
import PropsComponent from './components/PropsComponent';
import FCPropsComponent from './components/FCPropsComponent';

const App = () => {
  return (
    <div className="App">
      <UseStateComponent />
      <EventComponent />
      <PropsComponent name='浅野' />
      <FCPropsComponent name='伊東' />
    </div>
  );
}

export default App;

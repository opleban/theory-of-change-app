import React, { Component } from 'react';
import ToCBoard from './components/toc-board';
import PB_BOARD from './configs/pb-board';
import 'normalize.css';
import './styles/styles.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToCBoard {...PB_BOARD} />
      </div>
    );
  }
}

export default App;

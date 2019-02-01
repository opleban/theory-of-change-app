import React, { Component } from 'react';
import ToCBoard from './components/toc-board';
import {loadBoardData, getBoardLocale, sanFerminConfig} from './configs/pb-board';
import {getCurrentLocale} from './lib/helpers';
import LocaleConfigs from './configs/locales.js';
import 'normalize.css';
import './styles/styles.css';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

class App extends Component {
  constructor(props){ 
    super(props);
    this.state = { boardData: {} };
  }

  componentDidMount() {
    const boardReq = loadBoardData('data/san_fermin_data.csv', sanFerminConfig, (boardData)=> {
      const currentLocale = getCurrentLocale(window.location, DEFAULT_LOCALE, AVAILABLE_LOCALES);
      const localizedBoardData = getBoardLocale(boardData, currentLocale);
      this.setState({
        boardData: localizedBoardData
      });
    });
  }

  render() {
    const {boardData} = this.state;

    return (
      <div className="App">
        <ToCBoard {...boardData} />
      </div>
    );
  }
}

export default App;

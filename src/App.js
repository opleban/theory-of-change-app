import React, { Component } from 'react';
import ToCBoard from './components/toc-board';
import PB_BOARD, {getPBBoardLocale} from './configs/pb-board';
import {getCurrentLocale} from './lib/helpers';
import LocaleConfigs from './configs/locales.js';
import 'normalize.css';
import './styles/styles.css';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

class App extends Component {
  render() {
    const currentLocale = 
      getCurrentLocale(window.location, DEFAULT_LOCALE, AVAILABLE_LOCALES);
    const pbBoardLocale = getPBBoardLocale(PB_BOARD, currentLocale);
    return (
      <div className="App">
        <ToCBoard currentLocale={currentLocale} {...pbBoardLocale} />
      </div>
    );
  }
}

export default App;

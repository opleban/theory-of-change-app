import React, { Component } from 'react';
import ToCRouter from './containers/toc-router';
import {SanFerminPartial, PBPartial} from './partials/toc-partials.js';
import HomePagePartial from './partials/toc-home-page.js';
import {getCurrentLocale} from './lib/helpers';
import LocaleConfigs from './configs/locales.js';
import ToCHeader from './components/toc-header.js';
import ToCFooter from './components/toc-footer.js';
import 'normalize.css';
import './styles/styles.css';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

class App extends Component {

  render() {
    const currentLocale = getCurrentLocale(window.location, DEFAULT_LOCALE, AVAILABLE_LOCALES);

    return (
      <div className="App toc-vertical-page-flex">
        <div className="toc-outer-wrapper">
          <ToCHeader currentLocale={currentLocale} />
          <div className="toc-inner-wrapper">
            <ToCRouter>
              <HomePagePartial route="/" />
              <SanFerminPartial route="san-fermin" />
              <PBPartial route="participatory-budget" />
            </ToCRouter>
          </div>
        </div>
        <ToCFooter/>
      </div>
    );
  }
}

export default App;

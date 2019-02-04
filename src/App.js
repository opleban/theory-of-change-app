import React, { Component } from 'react';
import ToCRouter from './containers/toc-router';
import {SanFerminPartial, PBPartial} from './partials/toc-partials.js';
import HomePagePartial from './partials/toc-home-page.js';
import ToCFooter from './components/toc-footer.js';
import 'normalize.css';
import './styles/styles.css';

class App extends Component {

  render() {

    return (
      <div className="App toc-vertical-page-flex">
        <div className="toc-outer-wrapper">
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


/**

<div className="App">
  <ToCRouter>
    <SanFerminPartial />
    <PBPartial />
    <ForosLocalesPartial />
    <PlazaDeEspanaPartial />
  </ToCRouter>
</div>

**/
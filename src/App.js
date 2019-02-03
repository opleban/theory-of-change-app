import React, { Component } from 'react';
import ToCRouter from './containers/toc-router';
import {SanFerminPartial, PBPartial} from './partials/toc-partials.js';
import HomePagePartial from './partials/toc-home-page.js';
import 'normalize.css';
import './styles/styles.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ToCRouter>
          <HomePagePartial route="/" />
          <SanFerminPartial route="san-fermin" />
          <PBPartial route="participatory-budget" />
        </ToCRouter>
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
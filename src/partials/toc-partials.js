import React, { Component } from 'react';
import ToCBoard from '../components/toc-board';
import {loadBoardData, getBoardLocale, sanFerminConfig, pbConfig} from '../configs/boards-config';
import {getCurrentLocale} from '../lib/helpers';
import LocaleConfigs from '../configs/locales.js';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

export class ToCPartial extends Component {

  constructor(props){ 
    super(props);
    this.state = { boardData: {} };
  }

  componentDidMount() {
    const {dataPath, config} = this.props;
    const boardReq = loadBoardData(dataPath, config, (boardData) => {
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

function ToCPartialConstructor(dataPath, config) { 
  return (props) => { 
    return (<ToCPartial dataPath={dataPath} config={config} {...props} />); 
  }
}

export const SanFerminPartial = ToCPartialConstructor(`${process.env.PUBLIC_URL}/data/san_fermin_data.csv`, sanFerminConfig);

export const PBPartial = ToCPartialConstructor(`${process.env.PUBLIC_URL}/data/pb_data.csv`, pbConfig);

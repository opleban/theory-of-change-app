import React from 'react';
import STRINGS from '../configs/strings.js';
import {getCurrentLocale} from '../lib/helpers';
import LocaleConfigs from '../configs/locales.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ROUTES from '../configs/routes.js';
import '../styles/toc-home-page.scss';

const {AVAILABLE_LOCALES, DEFAULT_LOCALE} = LocaleConfigs;

const currentLocale = getCurrentLocale(window.location, DEFAULT_LOCALE, AVAILABLE_LOCALES);

function renderCaseStudies() {
  const CASE_STUDIES = [
    {name: STRINGS.CASE_STUDIES.SAN_FERMIN[currentLocale], link:ROUTES.SAN_FERMIN[currentLocale]},
    {name: STRINGS.CASE_STUDIES.PB[currentLocale], link:ROUTES.PB[currentLocale]},
    {name: STRINGS.CASE_STUDIES.PLAZA_DE_ESPANA[currentLocale], link:''},
    {name: STRINGS.CASE_STUDIES.FOROS_LOCALES[currentLocale], link: ''}
  ];
  return (
    CASE_STUDIES.map((caseStudy, i) => {
      const {name, link} = caseStudy;
      return (
        <Col lg={3} md={6} key={i}>
          <div className="toc-tile">
            <a href={link}><div className="toc-tile-name">{name}</div></a>
          </div>
        </Col>
      );
    })
  );
}

export default (props) => {
  return (
    <div className="toc-home-page toc-container">
      <h1>{STRINGS.HOME.TITLE[currentLocale]}</h1>
      <div className="toc-tiles">
        <Grid fluid>
          <Row> 
            {
              renderCaseStudies()
            }  
          </Row>
        </Grid>
      </div>
    </div>
  );
}
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import STRINGS from '../configs/strings.js';
import '../styles/toc-header.scss';

export default (props) => {
  const homeLink = props.currentLocale === 'es' ? 
    `${process.env.PUBLIC_URL}/es`: 
    process.env.PUBLIC_URL;

  const getLocalizeLink = () => {
    return props.currentLocale === 'es' ?
      <a href={`${process.env.PUBLIC_URL}`}>English</a> :
      <a href={`${process.env.PUBLIC_URL}/es`}>Español </a>;
  }

  return (
    <header className="toc-header">
      <div className="toc-container">
        <Grid fluid>
          <Row>
            <Col lg={4}>
              <a className="toc-site-title" rel="author" href={homeLink}>
                <Row>
                  <Col>
                    <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/header_image.png`} />
                  </Col>
                  <Col>
                    <div className="toc-site-title-text">{STRINGS.HOME.TITLE[props.currentLocale]}</div>
                  </Col>
                </Row>
              </a>
            </Col>
            <Col lg={8}>
              <Row>
                <Col xsOffset={10}>
                  <div className="toc-localize-link">{getLocalizeLink()}</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    </header>
  );
}

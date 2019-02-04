import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/toc-footer.scss';

export default (props) => {
  return (
    <footer className="toc-footer">
      <div className="toc-container">
        <Grid fluid>
          <Row>
            <div className="toc-footer-text-container">
              Header icon made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </div>
          </Row>
        </Grid>
      </div>
    </footer>
  );
}
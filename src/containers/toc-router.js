import React, {Component} from "react";
import {getCurrentPath} from '../lib/helpers';

export default class ToCRouter extends Component {
  constructor(props) {
    super(props);
    this._isMounted = true;
    this._route = getCurrentPath(window.location);
  }

  render() {
    const {children } = this.props;
    console.log('ROUTE: ', this._route);
    return React.Children
                .toArray(children)
                .filter((child) => { 
                  return child.props.route === this._route; 
                })
  }
}

ToCRouter.defaultProps = {
  route: '/'
};
// export const LocaleProvider = LocaleContext.Provider;
// export const LocaleConsumer = LocaleContext.Consumer;

/**
<TOCRouter>
  <SanFerminPartial />
  <PBPartial />
  <ForosLocalesPartial />
  <PlazaDeEspanaPartial />
</TOCRouter>
**/
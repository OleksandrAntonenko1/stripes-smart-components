import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import translations from '../../translations/stripes-smart-components/en';

const reducers = {
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);

// mimics the StripesTranslationPlugin in @folio/stripes-core
function prefixKeys(obj) {
  const res = {};
  for (const key of Object.keys(obj)) {
    res[`stripes-smart-components.${key}`] = obj[key];
  }
  res['stripes-components.clearThisField'] = 'clear this field';
  return res;
}

class Harness extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en" key="en" messages={prefixKeys(translations)}>
          {this.props.children}
        </IntlProvider>
      </Provider>
    );
  }
}

Harness.propTypes = {
  children: PropTypes.node,
};

export default Harness;

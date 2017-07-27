import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Viewer from 'Viewer';
import 'styles';

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderComponent(Viewer);

if (module.hot) {
  module.hot.accept(Viewer, () => { renderComponent(Viewer); });
}

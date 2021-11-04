import React from 'react';
import { shallow } from 'enzyme';
import { InfoButton } from './info-button.component';

it('should render InfoButton component', () => {
  expect(shallow(<InfoButton />)).toMatchSnapshot();
});
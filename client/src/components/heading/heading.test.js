import React from 'react';
import { shallow } from 'enzyme';
import { Heading } from './heading.component'

it('should render Heading component', () => {
  expect(shallow(<Heading />)).toMatchSnapshot();
});
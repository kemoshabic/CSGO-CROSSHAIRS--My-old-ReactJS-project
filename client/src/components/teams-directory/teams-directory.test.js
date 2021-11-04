import React from 'react';
import { shallow } from 'enzyme';
import { TeamsDirectory } from './teams-directory.component'

it('should render CollectionsOverview component', () => {
  expect(shallow(<TeamsDirectory teams={[]} />)).toMatchSnapshot();
});
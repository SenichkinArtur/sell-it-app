import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

test('render Footer component', () => {
  const component = shallow(<Footer />);
  expect(component.find('p')).toHaveLength(1);
  expect(component.find('footer')).toHaveLength(1);
});

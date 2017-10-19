import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from './Nav';

let title, wrapper;

configure({adapter: new Adapter()});

beforeEach(() => {
  title = "test";
  wrapper = shallow(<Nav title={title}/>)
})


it('should render an <h1> element for every product in `props.products`', () => {
  expect(wrapper.find('h1').length).toEqual(1);
});

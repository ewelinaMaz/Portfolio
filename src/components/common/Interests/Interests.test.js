import React from 'react';
import { shallow } from 'enzyme';
import { InterestsComponent } from './Interests';

const mockProps = {
  interests: [
    {
      name: 'lorem ipsum',
      image: 'https://i.postimg.cc/ydqZ5Hx3/leaves-1076307-340.png',
    },
  ],
};
describe('Component Interests', () => {
  it('should render without crashing', () => {
    const component = shallow(<InterestsComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});

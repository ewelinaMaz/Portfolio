import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const mockProps = {
  projects: [
    {
      id: '1',
      link: 'https://www.google.pl/',
      logo: '/image/css.png',
      project: '/image/html.png',
    },
  ],
};

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});

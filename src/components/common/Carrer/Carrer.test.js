import React from 'react';
import { shallow } from 'enzyme';
import { CarrerComponent } from './Carrer';

const mockProps = {
  carrer: [
    {
      description: 'lorem ipsum',
      id: '1a',
      photo: 'https://i.postimg.cc/ZKBrCG1X/automobile-4228723-1280.jpg',
      proffesion: 'lorem ipsum',
    },
    {
      description: 'lorem ipsum',
      id: '1b',
      photo: 'https://i.postimg.cc/ZKBrCG1X/automobile-4228723-1280.jpg',
      proffesion: 'lorem ipsum',
    },
    {
      description: 'lorem ipsum',
      id: '1c',
      photo: 'https://i.postimg.cc/ZKBrCG1X/automobile-4228723-1280.jpg',
      proffesion: 'lorem ipsum',
    },
  ],
};

describe('Component Carrer', () => {
  it('should render without crashing', () => {
    const component = shallow(<CarrerComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});

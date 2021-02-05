import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MemoryGameCard from './MemoryGameCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MemoryGameCardData } from '../memory-game.interfaces';
import { IconName } from '@fortawesome/fontawesome-svg-core';

configure({ adapter: new Adapter() });

describe('<MemoryGameCard />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const card: MemoryGameCardData = {
      id: 'testcard',
      symbol: 'amazon',
      isMatched: false,
    };

    wrapper = shallow(
      <MemoryGameCard
        isFlipped={false}
        isCheating={false}
        card={card}
        onClick={() => {}}
      />
    );
  });

  it('should render a single <FontAwesomeIcon /> if not cheating', () => {
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should render 2 <FontAwesomeIcon /> if cheating', () => {
    wrapper.setProps({
      isCheating: true,
    });
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2);
  });
});

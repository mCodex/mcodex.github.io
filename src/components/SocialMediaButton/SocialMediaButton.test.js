import React from 'react';
import renderer from 'react-test-renderer';
import SocialMediaButton from '.';

describe('Home', () => {
  it('Snapshot Testing', () => {
    const wrapper = renderer.create(<SocialMediaButton />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Testing if screen is rendering', () => {
    const wrapper = renderer.create(<SocialMediaButton />).toJSON();
    expect(wrapper).toBeTruthy();
  });

  it('Testing if button is clickable', () => {
    const spy = sinon.spy();

    const wrapper = mount(<SocialMediaButton onClick={spy} iconName="linkedin" />);

    const linkedinButton = wrapper.find('#linkedinButton').first();

    linkedinButton.simulate('click');
    expect(spy.calledOnce).toBe(true);
  });
});

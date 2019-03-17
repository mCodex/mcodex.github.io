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

  it('Testing if screen is rendering', () => {
    const spy = sinon.spy();

    const wrapper = shallow(<SocialMediaButton onClick={spy} />).dive();

    const linkedinButton = wrapper.find('#linkedinButton');

    linkedinButton.simulate('click');
    expect(spy.calledOnce).toBe(true);
    // expect(Home.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});

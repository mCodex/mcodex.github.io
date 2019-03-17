import React from 'react';
import renderer from 'react-test-renderer';
import Home from '.';

describe('Home', () => {
  it('Snapshot Testing', () => {
    const wrapper = renderer.create(<Home />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Testing if screen is rendering', () => {
    const wrapper = renderer.create(<Home />).toJSON();
    expect(wrapper).toBeTruthy();
  });

  // it('Testing if screen is rendering', () => {
  //   const onButtonClick = sinon.spy();
  //
  //   const wrapper = shallow(<Home onClick={onButtonClick} />).dive();
  //
  //   const linkedinButton = wrapper.find('#linkedinButton');
  //
  //   linkedinButton.simulate('click');
  //   expect(onButtonClick.calledOnce).toBe(true);
  //   // expect(Home.prototype.componentDidMount).to.have.property('callCount', 1);
  // });
});

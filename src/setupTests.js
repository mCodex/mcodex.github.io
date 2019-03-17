import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { createSerializer } from "enzyme-to-json";
import sinon from 'sinon';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Define globals to cut down on imports in test files
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;

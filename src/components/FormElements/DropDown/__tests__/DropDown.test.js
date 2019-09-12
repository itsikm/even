import React from 'react';
import { shallow } from 'enzyme';
import DropDown from '../DropDown';

describe('DropDown test', (props = {
    label: 'test'
}) => {
    it('renders drop down without crashing', () => {
        shallow(<DropDown />);
    });

    const wrapper = shallow(<DropDown label={props.label} />);
    const label = wrapper.find('label');

    it("should exists", () => {
        expect(wrapper.length).toBe(1);
    });

    it("label should not be empty", () => {
        expect(label.text()).toBe(props.label);
    });
});



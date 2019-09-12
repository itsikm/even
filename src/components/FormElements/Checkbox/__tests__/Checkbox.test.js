import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

describe('Checkbox test', (props = {
    text: 'test'
}) => {
    it('renders checkbox without crashing', () => {
        shallow(<Checkbox />);
    });

    const wrapper = shallow(<Checkbox>{props.text}</Checkbox>);

    it("should exists", () => {
        expect(wrapper.length).toBe(1);
    });

    it("should not be empty", () => {
        expect(wrapper.text()).toBe(props.text);
    });
});



import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button test', (props = {
    text: 'test'
}) => {
    it('renders button without crashing', () => {
        shallow(<Button />);
    });

    const wrapper = shallow(<Button>{props.text}</Button>);

    it("should exists", () => {
        expect(wrapper.length).toBe(1);
    });

    it("should not be empty", () => {
        expect(wrapper.text()).toBe(props.text);
    });
});



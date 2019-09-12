import React from 'react';
import {render, shallow} from 'enzyme';
import Input from '../Input';

describe('Input test', (props = {
    label: 'label',
    name: 'test',
    value: 'value',
    type: 'number'
}) => {
    it('renders input without crashing', () => {
        shallow(<Input />);
    });

    const wrapper = render(
        <Input {...props} />
    );

    const nativeInput = wrapper.find('input');
    const label = wrapper.find('label');

    it("Label should exists", () => {
        expect(label.length).toBe(1);
    });

    it("Label should not be empty", () => {
        expect(label.text()).toBe(props.label);
    });

    it("Native input should exists", () => {
        expect(nativeInput.length).toBe(1);
    });

    it("Name should not be empty", () => {
        expect(nativeInput.attr('name')).toBe(props.name);
    });

    it("Value should not be empty", () => {
        expect(nativeInput.attr('value')).toBe(props.value);
    });
});

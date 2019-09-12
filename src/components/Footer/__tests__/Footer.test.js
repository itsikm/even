import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';
import { COPYRIGHT } from '../../../constants';

describe('Footer test', () => {
    it('renders footer without crashing', () => {
        shallow(<Footer />);
    });

    const wrapper = shallow(<Footer />);

    it("should exists", () => {
        expect(wrapper.length).toBe(1);
    });

    it("should not be empty", () => {
        expect(wrapper.text()).toBe(COPYRIGHT);
    });
});



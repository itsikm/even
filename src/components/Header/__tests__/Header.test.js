import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header test', () => {
    it('renders header without crashing', () => {
        shallow(<Header />);
    });
});



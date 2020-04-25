import React from 'react';
import {shallow} from 'enzyme';
import Exercise5 from './Exercise5';
import Dropdown from './Dropdown';

describe('Exercise5', () => {
    const wrapper = shallow(<Exercise5 />);
    const dropdown = wrapper.find('Dropdown');

    it('should render a Dropdown', () => {
        expect(dropdown).toHaveLength(1);
    });

    it('should have a "header" prop', () => {
        expect(dropdown.prop('header')).toBeDefined();
    })

    it('should have children', () => {
        expect(dropdown.prop('children')).toBeDefined();
    })
});

describe('Dropdown', () => {
    it('should have isOpen in state and a toggleDropdown function', () => {
        const dropdown = shallow(
            <Dropdown header="header text">
                <div className="test-child">test-child</div>
            </Dropdown>
        );

        expect(dropdown.state()).toEqual({
            isOpen: false
        });
        expect(dropdown.instance().toggleDropdown).toBeDefined();
        expect(typeof dropdown.instance().toggleDropdown).toEqual('function');
    });

    it('should not render children by default', () => {
        const dropdown = shallow(
            <Dropdown header="header text">
                <div className="test-child">test-child</div>
            </Dropdown>
        );

        expect(dropdown).toMatchSnapshot();
        expect(dropdown.find('.test-child')).toHaveLength(0);
    });

    it('should render children once the header is toggled', () => {
        const dropdown = shallow(
            <Dropdown header="header text">
                <div className="test-child">test-child</div>
            </Dropdown>
        );
        const header = dropdown.find('.Dropdown__header');
        header.simulate('click');

        expect(dropdown).toMatchSnapshot();
    });
});

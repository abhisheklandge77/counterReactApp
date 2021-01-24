import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Counter from './components/counter'

describe('Counter component',()=>{
    it('should call increament counter function when increament button is clicked' , () => {
        const mockOnIncreament = jest.fn();
        const props = {
            counter: {
                value: 0,
                id: 1
            },
            onIncreament: mockOnIncreament
        }
        const wrapper = shallow(<Counter {...props}/>);
        const total1 = wrapper.find('span').text();
        expect(total1).toBe('Zero');
        const button = wrapper.find('button').at(0);
        button.simulate('click');
        expect(mockOnIncreament).toHaveBeenCalledWith(props.counter.id);
    })

    it('should call decreament counter function when decreament button is clicked' , () => {
        const mockOnDecreament = jest.fn();
        const props = {
            counter : {
                value : 0,
                id : 1
            },
            onDecreament : mockOnDecreament 
        }

        const wrapper = shallow(<Counter {...props}/>);
        const button = wrapper.find('button').at(1);
        button.simulate('click');
        expect(mockOnDecreament).toHaveBeenCalledWith(props.counter.id);

    });

    it('should call reset counter function when reset button is clicked' , () => {
        const mockOnReset = jest.fn();
        const props = {
            counter : {
                value : 0,
                id : 1
            },
            onReset : mockOnReset 
        }

        const wrapper = shallow(<Counter {...props}/>);
        const button = wrapper.find('button').at(2);
        button.simulate('click');
        expect(mockOnReset).toHaveBeenCalledWith(props.counter.id);

    });

    it('should call delete counter function when delete button is clicked' , () => {
        const mockOnDelete = jest.fn();
        const props = {
            counter : {
                value : 0,
                id : 1
            },
            onDelete : mockOnDelete
        }

        const wrapper = shallow(<Counter {...props}/>);
        const button= wrapper.find('button').at(3);
        button.simulate('click');
        expect(mockOnDelete).toHaveBeenCalledWith(props.counter.id);
    });

    it('should change class to primary when counter increamented' , () => {
        const mockOnIncreament = jest.fn();
        const mockGetBadges = jest.fn();

        const props = {
            counter : {
                value : 1,
                id : 1
            },
            onIncreament : mockOnIncreament,
            getBadges : mockGetBadges
        }

        const wrapper = shallow(<Counter {...props}/>);
        expect(wrapper.find('span.badge-primary').html()).toBe('<span class=\"badge m-2 badge-primary\">1</span>');
    });
});

import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Counters from './components/counters';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe('App component', () => {
  it('should increament counter', () => {
    const mockHandleIncreament = jest.fn();
    const props = {
      counter: {
        value: 0,
        id: 1
      },
      handleIncreament: mockHandleIncreament
    }

    const wrapper = shallow(<App {...props} />);
    const countersComponent = wrapper.find(Counters);
    countersComponent.props().onIncreament(1);
    expect(wrapper.state()).toEqual({
      "counters":[
         {
            "id":1,
            "value":1
         },
         {
            "id":2,
            "value":0
         },
         {
            "id":3,
            "value":0
         },
         {
            "id":4,
            "value":0
         }
      ]
   });
  });

  it('should delete counter', () => {
    const mockHandleDecreament = jest.fn();
    const props = {
      counter: {
        value: 0,
        id: 1
      },
      handleDecreament: mockHandleDecreament
    }

    const wrapper = shallow(<App {...props} />);
    const countersComponent = wrapper.find(Counters);
    countersComponent.props().onDecreament(1);
    expect(wrapper.state()).toEqual({
      "counters":[
         {
            "id":1,
            "value":0
         },
         {
            "id":2,
            "value":0
         },
         {
            "id":3,
            "value":0
         },
         {
            "id":4,
            "value":0
         }
      ]
   });
  });
  it('should reset counter', () => {
    const mockHandleReset = jest.fn();
    const props = {
      counter: {
        value: 0,
        id: 1
      },
      handleReset: mockHandleReset
    }

    const wrapper = shallow(<App {...props} />);
    const countersComponent = wrapper.find(Counters);
    countersComponent.props().onReset(1);
    expect(wrapper.state()).toEqual({
      "counters":[
         {
            "id":1,
            "value":0
         },
         {
            "id":2,
            "value":0
         },
         {
            "id":3,
            "value":0
         },
         {
            "id":4,
            "value":0
         }
      ]
   });
  });

  it('should delete counter', () => {
    const mockHandleDelete = jest.fn();
    const props = {
      counter: {
        value: 0,
        id: 1
      },
      handleDelete: mockHandleDelete
    }

    const wrapper = shallow(<App {...props} />);
    const countersComponent = wrapper.find(Counters);
    countersComponent.props().onDelete(1);
    expect(wrapper.state()).toEqual({
      "counters":[
         {
            "id":2,
            "value":0
         },
         {
            "id":3,
            "value":0
         },
         {
            "id":4,
            "value":0
         }
      ]
   });
  });

  it('should decreament value when counter value is greater than 0' , () => {
    const mockHandleIncreament = jest.fn();
    const mockHandleDecreament = jest.fn();
    const props = {
      counter: {
        value: 0,
        id: 1
      },
      handleIncreament: mockHandleIncreament,
      handleDecreament : mockHandleDecreament
    }

    const wrapper = shallow(<App {...props} />);
    const countersComponent = wrapper.find(Counters);
    countersComponent.props().onIncreament(1);
    countersComponent.props().onDecreament(1);
    expect(wrapper.state()).toEqual({
      "counters":[
         {
            "id":1,
            "value":0
         },
         {
            "id":2,
            "value":0
         },
         {
            "id":3,
            "value":0
         },
         {
            "id":4,
            "value":0
         }
      ]
   });
  })
});

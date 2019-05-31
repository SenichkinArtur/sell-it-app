import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductPage from './ProductPage';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

test('render ProductPage component without props', () => {
    const component = shallow(<ProductPage />);
    expect(component.find('div')).toHaveLength(2);
    expect(component.find('p')).toHaveLength(0);
    expect(component.find('img')).toHaveLength(0);
});

describe('render ProductPage with props', () => {
    const props = {
        images: [{
            advert: 244,
            file: "http://light-it-04.tk/media/photos/advert_244/0ea4384e-8dd.jpg",
            pk: 399
        }],
        owner: {
            avatar: "http://light-it-04.tk/media/avatars/8e2cf32e-909.jpg",
            email: "qweasd@gmail.com",
            first_name: "Asdqwe",
            id: 111,
            last_name: "Weqweq",
            username: "asdqweqdsag",
        },
        pk: 345,
        price: 123,
        text: 'qwe'
    };

    const emptyProps = {
        images: [],
        owner: {
            username: '',
        },
        pk: '',
        price: '',
        text: ''
    };

    test('render ProductPage component with props', () => {
        const component = shallow(<ProductPage singleProduct={props}/>);
        expect(component.find('div')).toHaveLength(6);
        expect(component.find('p')).toHaveLength(4);
        expect(component.find('span')).toHaveLength(4);
    });

    test('render ProductPage component with empty props', () => {
        const component = shallow(<ProductPage singleProduct={emptyProps}/>);
        expect(component.find('div')).toHaveLength(6);
        expect(component.find('p')).toHaveLength(4);
        expect(component.find('span')).toHaveLength(4);
    });

});

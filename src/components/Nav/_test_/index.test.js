import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('render', ()=> {
        render(<Nav/>);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visble', () => {
    it('insert emoji into the h2', () => {
        const { getByLabelText } = render(<Nav/>);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visble', () => {
    it('insert text into the links', () => {
        const { getByTestId } = render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
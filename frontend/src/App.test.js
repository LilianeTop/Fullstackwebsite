import React from 'react';
import {findByLabelText, fireEvent, render, screen } from '@testing-library/react';
import UploadPhoto from "./components/admin/UploadPhoto";
// import '@testing-library/react/cleanup-after-each';

describe('<UploadPhoto />', () => {
    it('renders without crashing', () => {
        render(<UploadPhoto/>);
    });
    it('themes checkboxes are displayed', () => {
        const themeCheckboxes = render(<UploadPhoto/>);
        themeCheckboxes.getByText(/Landschap/);
        themeCheckboxes.getByText(/Water/);
        themeCheckboxes.getByText(/Abstract/);
    })

    it('click on checkbox works', () => {
        const themes = [];
        const onChange = (value, checked) => {}
        render(<UploadPhoto defaultChecked onChange={onChange()} />)
        let checkboxes = [];
        checkboxes = screen.getAllByRole('checkbox')

        fireEvent.click(checkboxes[0])//Landschap
        expect(checkboxes[0]).toBeChecked()

        fireEvent.click(checkboxes[1])//Stad
        expect(checkboxes[1]).toBeChecked()

        fireEvent.click(checkboxes[7])//Industrie
        expect(checkboxes[7]).toBeChecked()

        fireEvent.click(checkboxes[1])//Stad
        expect(checkboxes[1]).not.toBeChecked()

        //FIXME: it doesn't work the same as in the actual Component so what am I testing?
        for(let i = 0; i < checkboxes.length; i++){
            if(checkboxes[i].checked){
                themes.push(checkboxes[i])
            } else {
                // const index = themes.findIndex((item) => item === checkboxes[i].value)
                // themes.splice(index, 1)
            }
        }
        for (let i = 0; i < themes.length; i++) {
            console.log(themes[i].value);//returns Landschap Industrie
        }

    })
});



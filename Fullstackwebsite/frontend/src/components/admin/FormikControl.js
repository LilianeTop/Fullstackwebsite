import React from 'react'
import RadioButtons from "./RadioButtons";

function FormikControl(props) {
    const { control, ...rest} = props
    switch (control){
        case 'input':
            // return <Input {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
        default:
            return null
    }
}

export default FormikControl;
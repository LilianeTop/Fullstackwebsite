import React from "react";
import { Formik, Form } from 'formik';
import FormikControl from "./FormikControl";

function FormikContainer () {
    const radioOptions = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'}
    ]

    const initialValues = {
        radioOption: ''
    }

    const onSubmit = values => console.log('Form data', values)
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {formik => (
                <Form>
                    <FormikControl
                        control='radio'
                        label = 'Radio Topic'
                        name = 'radioOption'
                        option={radioOptions}
                        />
                        <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )

}
export default FormikContainer;
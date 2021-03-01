import React from 'react';
import { useFormik} from "formik";
import './ArtpieceUploadForm.css';

const  initialValues = {
    name: 'Liliane',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
//    here we have to send the data to the api
}

const validate = values => {
    //values.name
    //errors.name
    //errors.message
    let errors =  {}

    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }
    if(!values.channel){
        errors.channel = 'Required'
    }
    return errors
}


function ArtpieceUploadForm () {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Form errors', formik.errors)

    return  (
        <div>
        <form  onSubmit={formik.handleSubmit}>
            <h2 className='header'>Vul het formulier in om een foto te uploaden</h2>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text'
                       id='name'
                       name='name'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}

                />
                {formik.touched.name && formik.errors.name ?
                    <div className='errorMessage'>{formik.errors}</div> : null}
            </div>
            <br />
            <div >
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ?
                <div className='errorMessage'>{formik.errors}</div> : null}
            </div>
            <br />
            <div >
                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}
                />
                {formik.touched.channel && formik.errors.channel ?
                    <div className='errorMessage'>{formik.errors}</div> : null}
            </div>
            <br />
            <button type='submit'>Verzenden</button>
        </form>

    </div>
)

}

export default ArtpieceUploadForm;
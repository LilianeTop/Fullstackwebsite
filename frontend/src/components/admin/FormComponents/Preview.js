import React, {useState} from 'react';
//FIXME: why is this not working?
const PreviewFile = (event)  => {
    const [state, setState] = useState(null);
    setState({
        preview: URL.createObjectURL(event.target.files[0])
    })
    const preview = document.querySelector('img[id=preview]');
    const self = this;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (upload) {
        preview.src = reader.result;
        self.setState({
            selectedFile: upload.target.result
        });
    };
    reader.readAsDataURL(file);
}


export default PreviewFile;
import React from 'react';
import axios from 'axios';

const TestForm = () =>{
    
    const fileSelectHandler = event =>{
        imgbbUploader(event.target.files[0]).then(resp => {
            console.log(resp.data.data.url)
          })
    }

    const imgbbUploader = ( img ) => {
        let body = new FormData()
        body.set('key', 'fc932c3718be04e605f6d38678fc9533')
        body.append('image', img)
    
        return axios({
            url: 'https://api.imgbb.com/1/upload',
            method: 'post',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: body
        })
    }

    const fieUploadHandler = () => {
        
    }

    return(
    <>
        <div>
            <input type="file"  onChange={fileSelectHandler}/>
            <button onClick={fieUploadHandler}>Upload</button>
        </div>
    </>
    )
};

export default TestForm;


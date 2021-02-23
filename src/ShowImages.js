import React from 'react';

const ShowImages=(props)=> {
    console.log(props.images);
    const images =props.images.map(image => {
        return <img key={image.id} src={image.webformatURL}  />
    })
    return (
            <div className='image-list'>
            {images}
            </div>
    )
}

export default ShowImages

import React from 'react';
import Image from './Image';
import NoResults from './NoResults';
import Loading from './Loading';

const ImageGallery = (props) => {
    const results = props.images;
    let images;
    if (props.loading) {
        images = <Loading />
    } else {
        if (results.length > 0) {
            images = results.map( image => <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} title={image.title} key={image.id} />)
        } else {
            images = <NoResults />
        }
    }   
    
    return (  
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                {images}
            </ul>
        </div>
    );
}
 
export default ImageGallery;
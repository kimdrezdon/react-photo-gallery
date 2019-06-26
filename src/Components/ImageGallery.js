import React from 'react';
import Image from './Image';
import NoResults from './NoResults';
import Loading from './Loading';

const ImageGallery = (props) => {
    /**
     * Sets results to the images array from the App state.
     * If the loading state is true, the Loading component is returned.
     * If the loading state is false, and the search was able to find images, the images are returned.
     * If the loading state is false but the search found no matching images, the NoResults component is returned.
     */
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
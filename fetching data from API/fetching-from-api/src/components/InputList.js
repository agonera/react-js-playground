import React from 'react';

const InputList = (props) => {

    // const images = props.images.map((image) => {
    //     return <img
    //         key={image.id}
    //         src={image.urls.regular}
    //         alt={image.description}
    //     />
    // });

    // alternate version:

    const images = props.images.map(({ id, urls, description }) => {
        return <img
            key={id}
            src={urls.regular}
            alt={description}
        />
    });

    return <div>{images}</div>

};

export default InputList;
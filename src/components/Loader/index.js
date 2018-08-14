import React from 'react';
import LoaderSrc from '../../assets/img/loading.gif';

const Loader = props => (
    <div>
        <img
        alt="Loading icon"
        src={LoaderSrc}
        />
    </div>
);

export default Loader;
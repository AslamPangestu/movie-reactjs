import React from 'react';

//Function with components
const Intro = props =>(
    <p className="App-intro">
        {/* get message using props */}
        {props.message}
    </p>
)

export default Intro;
import React from 'react';
import Vimeo from '@vimeo/player';

const TimeLine = () => {

    let myPlayer = new Vimeo.Player('vimeotest', {id: 131277094, width: 640, loop: false});

    return(
        <div>
        <p>here is the main timeline</p>
        <div id='vimeotest'>{myPlayer}</div>
        </div>
    );
}

export default TimeLine;
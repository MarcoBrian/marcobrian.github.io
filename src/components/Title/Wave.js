import React from 'react'
import waveSVG from '../../images/wave.png';

export default function Wave({positioning}) {
    let classStyle = {"alignSelf":"flex-start","height":"80px","width":"80px"};
    let classStyleRight = {"alignSelf":"flex-end","height":"80px","width":"80px"};

    console.log(positioning);
    if (positioning == "title-right"){
        return <img style={classStyleRight} src={waveSVG}/>;

    }else{
        return <img style={classStyle} src={waveSVG}/>;

    }

    
}

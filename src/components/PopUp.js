import React from 'react'
import '../style/components/PopUp.scss';
//import {useEffect} from 'react'


function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
        ): "";
    
}

export default PopUp

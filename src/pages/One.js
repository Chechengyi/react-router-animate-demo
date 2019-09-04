/**
 *@author: chechengyi
 *@time: 2019/9/2
 *@desc:
 */

import React from 'react'
import {CSSTransition} from "react-transition-group";

const One = props=> {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className='content'>
            <button onClick={()=>setVisible(!visible)}>click me!</button>
            {
                <CSSTransition
                    in={visible}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                >
                    <div style={{marginTop: 50, width: 200, height: 200, backgroundColor: 'red'}}>

                    </div>
                </CSSTransition>
            }
        </div>
    );
};

export default One;

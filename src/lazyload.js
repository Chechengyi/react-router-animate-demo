/**
 *@author: chechengyi
 *@time: 2019/9/2
 *@desc:
 */

import React from 'react'
import { CSSTransition } from 'react-transition-group'

export const lazyload = Com => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state  = {
                com: null,
                loadIn: false
            }
        }

        componentDidMount(){
            this.loadCom();
        }
        loadCom =()=> {
            Com()
                .then( com=>{
                    this.setState({
                        com: com.default,
                        loadIn: true
                    })
                })
        };
        render(){
            // if ( this.state.com ) {
            //     return (
            //         <CSSTransition
            //             in={this.state.loadIn}
            //             classNames='alert'
            //             timeout={300}
            //             unmountOnExit
            //         >
            //             <this.state.com {...this.props} />
            //         </CSSTransition>
            //     )
            // } else {
            //     return null
            // }
            return (
                <CSSTransition
                    in={this.state.loadIn}
                    classNames='scroll'
                    timeout={500}
                    unmountOnExit
                >
                    {this.state.com ? <this.state.com {...this.props} /> : <div></div>}
                </CSSTransition>
            )
        }
    } 
};

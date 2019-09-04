import React from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group'
import routerMenu from './router'
import { Route, BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
      <div className="left-menu">
        <ul>
          {routerMenu.map( item=> (
              !item.redirect && <li key={item.title} className='menu-item'>
                  <Link to={item.path}>{item.title}</Link>
              </li>
          ))}
        </ul>
      </div>
          {/*{*/}
          {/*    routerMenu.map( item=> {*/}
          {/*       return (*/}
          {/*           item.redirect ?*/}
          {/*               <Redirect path='/' exact to={item.to} />:*/}
          {/*               <Route*/}
          {/*                   path={item.path}*/}
          {/*                   key={item.path}*/}
          {/*                   render={ props=> (*/}
          {/*                       <CSSTransition*/}
          {/*                           in={props.match !== null}*/}
          {/*                           timeout={500}*/}
          {/*                           classNames="scroll"*/}
          {/*                           key={item.path}*/}
          {/*                       >*/}
          {/*                           <item.component {...props} />*/}
          {/*                       </CSSTransition>*/}
          {/*                   ) }*/}
          {/*               />*/}
          {/*       )*/}
          {/*    })*/}
          {/*}*/}
          {
              routerMenu.map( item=> {
                  return (
                      item.redirect ?
                          <Redirect path='/' exact to={item.to} />:
                          <Route
                              path={item.path}
                              key={item.path}
                              render={ props=> (
                                  <item.component {...props} />
                              ) }
                          />
                  )
              })
          }
      </Router>
    </div>
  );
}

export default App;

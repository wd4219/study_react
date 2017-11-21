import React from 'react';
import ReactDom from 'react-dom';

import './index.styl'


class App extends React.Component{
  render(){
    return(
      <div className="index">
        <header className="index-header">
          <div className="index-header-input">想吃点什么？点这里</div>
        </header>
        <ul className="slider">
          <li>
            <img src="../static/images/TB29ag2cuKAUKJjSZFzXXXdQFXa_!!5-0-luban.jpg_q50.jpg"/>
          </li>
          <li>
            <img src="../static/images/TB2g.byd46I8KJjy0FgXXXXzVXa_!!164-0-luban.jpg_q50.jpg"/>
          </li>
          <li>
            <img src="../static/images/TB2V9qjdgfH8KJjy1zcXXcTzpXa_!!182-0-luban.jpg_q50.jpg"/>
          </li>
        </ul>
      </div>
    )
  }
}
ReactDom.render(<App/>,document.getElementById('root'));
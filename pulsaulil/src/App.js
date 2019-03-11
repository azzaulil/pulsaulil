import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: 'Home',
    };
  };

  clicked(menu){
    this.setState({
      active: menu,
    });
  }
  render() {
    return (
	
      <div id="app">
      
          <nav className="nav">{this.props.items.map((menu,index) => {
            var style='menu';

            if (this.state.active === menu){
              style = `${style} is-active`;
            }

            return <a
                  className={style+" "+menu}
                
                  onClick={this.clicked.bind(this, menu)}
                  key={index}
                >
                  {menu}
                </a>;
          })}
          </nav>

          <div className="info">
  ini adalah <span className={"selected "+this.state.active}>{this.state.active}</span>
          </div>
      </div>
    
    );
  }
}

export default App;
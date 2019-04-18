import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "Home",
      color : "grey",
      img : "home.jpg",
      nilai1 : null,
      nilai2 : null,
      /*operator : null,
      hasil : null*/
    };
  };

  /*handleSubmit(e) {
    e.preventDefault() ;

    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch (operator){
      case '+':
        hasil = nilai1 + nilai2;
        break;
      case '-':
        hasil = nilai1 - nilai2;
        break;
      case '*':
        hasil = nilai1 * nilai2;
        break;
      case '/':
        hasil = nilai1 / nilai2;
        break;
    }

    this.setState({nilai1, nilai2, operator, hasil});

    this.refs.nilai1.value = null;
    this.refs.nilai2.value = null;
  }

  renderHasil(){
    const {nilai1, nilai2, operator, hasil} = this.state;

    if(this.state.hasil){
      return (
        <div>
          <br/>
          <p className="alert alert-success">
            {nilai1+operator+nilai2+'='+hasil}
          </p>
        </div>
      )
    }
  }*/

  clicked(menu){
    this.setState({
      name : menu.name,
      color : menu.color,
      img : menu.img
    });
  }

  info(name){
    if(name == 'Calculator'){
      return (
        <div>
          ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
            <br></br>

            <input type = "number" name="nilai1" placeholder="angka 1" 
              value={this.state.nilai1} onChange={this.onchangeHandler.bind(this)}/>+
            <input type = "number" name="nilai2" placeholder="angka 2"
              value={this.state.nilai2} onChange={this.onchangeHandler.bind(this)}/>=

            <span>{parseInt(this.state.nilai1) +  parseInt(this.state.nilai2)}</span>
        </div>
      );
      
    } else {

      return (
        <div>
          ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
            <br></br>
            <img src={this.state.img} width="200"></img>
        </div>
      )
    }
  }

  changeHandler(event){
    this.setState({
      nilai1 : event.targer.value
    });
  }

  render() {
    return (
	
      <div id="app">
      
          <nav className="nav">{this.props.items.map((menu,index) => {
            var style='menu';

            if (this.state.color === menu.color){
              style = `${style} is-active`;
            }

            return <a
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this, menu)}
                  key={index}>
                  {menu.name}
                </a>;
          })}
          </nav>

          <div className="info">
            {this.info(this.state.name)}
              
          </div>
      </div>
    
    );
  }
}

export default App;
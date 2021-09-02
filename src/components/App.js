import React,{Component} from 'react'




class App extends Component {
    state = {
        number:0,
        active: false
      }
      handleStart = () =>{
          this.setState({
              active: !this.state.active
          })
          if(this.state.active === false){
           this.idInterval = setInterval(() => this.Start(), 10)
          }else if(this.state.active === true) {
              clearInterval(this.idInterval)
       
          }
      }
      Start = () =>{
        this.setState({
            number: this.state.number + 0.01
        })
      }
      handleReset = () =>{
        this.setState({
            number: 0
        })
       
    }
    render() { 
        let num = this.state.number
        let n = num.toFixed(2)
        return (
            <div className="all">
                <span>
                    {n}
                </span>
            <div className="buttons">
                <button className={this.state.active ?"stop":"start"} 
                onClick={this.handleStart}>
                {this.state.active ?"Stop" : "Start"}</button>
                <button disabled={this.state.active} className={this.state.active? "off":"on"} onClick={this.handleReset}>
                    Reset
                </button>
            </div>
            </div>
          );
    }
}
 
export default App;
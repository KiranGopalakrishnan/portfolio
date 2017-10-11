import React,{Component} from 'react';
import './TypingText.css';
var textArray=[];
class TypingText extends Component{
constructor(){
  super();
  this.state={
    text:''
  }
}

componentDidMount=()=>{
    var i=0;
    textArray = (this.props.text).split('');
    var timer = setInterval(()=>{
      var selfe=this;
      if(i<textArray.length){
          selfe.setState((prevState,props)=>{
            return {text:prevState.text+textArray[i]}
          });
            }else{
        clearInterval(timer);
      }
    i++;
  },this.props.time);
}
render(){
    return(
      <div className='typingText'>
      <h1><span>{this.state.text}</span></h1>
      </div>
    );
  }
}
export default TypingText;

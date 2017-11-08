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
        selfe.props.onFinish();
      }
      i++;
    },this.props.time);
  }
  render(){
    return(
      <div className='typingText' refs="typingText">
      <svg viewBox="0 0 960 300">
      <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">{this.state.text}</text>
      </symbol>
      <g className="g-ants">
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
      </svg>
      </div>
    );
  }
}
export default TypingText;

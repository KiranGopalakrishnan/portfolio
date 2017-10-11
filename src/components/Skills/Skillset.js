import React,{Component} from 'react';
import './Skillset.css';
var rows=[];
class Skillset extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
    for(var i=0;i<this.props.children.length;i++){
      rows.push(this.props.children[i]);
    }
  }
  render(){
    return(
        <ul className='skills-ul'>
        {rows}
        </ul>
    );
  }
}
export default Skillset;

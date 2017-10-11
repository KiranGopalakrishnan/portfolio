import React,{Component} from 'react';
import './SingleProject.css';

class SingleProject extends Component{
  constructor(){
    super();
    this.state={
      hovered:false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver(){
    this.setState({hovered:true});
  }
  handleMouseOut(){
    this.setState({hovered:false});
  }
  render(){
    var imgUrl = this.props.image;
    var divStyle = {
      height:this.props.height,
      width:this.props.width,
  backgroundImage: 'url(' + imgUrl + ')',
};
    return(
      <div style={divStyle} className='single-project' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div className='projectDetail'>
          <div  className={this.state.hovered?"hover-revealer hover-reveal":"hover-revealer"}>
            <h4>{this.props.title}</h4>
            <h5>{this.props.type}</h5>
            <span className="tags">
              {this.props.tags}
            </span>
            <span className="visit-button-container">
              <a target="_blank" className="visit-button" href={this.props.url}>Visit</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleProject;

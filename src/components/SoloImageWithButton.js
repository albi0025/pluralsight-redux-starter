import React from 'react';

class SoloImageWithButton extends React.Component{
  constructor(){
    super();

    this.addOurImage = this.addOurImage.bind(this);
    this.removeOurImage = this.removeOurImage.bind(this);
  }

  addOurImage() {
    this.props.addNewImage(this.props.img);
    this.props.removeImage(this.props.img);
  }

  removeOurImage() {
    this.props.removePic(this.props.img);
  }

  render()
  {
    let ourButton = (
      <button onClick={this.addOurImage} type="submit" className="btn btn-primary">Add To My List</button>
    );
    let deleteButton = (
      <button onClick={this.removeOurImage} type="submit" className="btn btn-warning">Delete</button>
    );
    return(
      <div key={this.props.img.name}>
        <img width="300" height="300" src={this.props.img.url}></img>
        {this.props.noButton ? "" : ourButton}
        {this.props.noDeleteButton ? "" : deleteButton}
        <h3>{this.props.img.description}</h3>
      </div>
    );
  }
}

SoloImageWithButton.propTypes = {
  img: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  noButton: React.PropTypes.bool,
  noDeleteButton: React.PropTypes.bool,
  removeImage: React.PropTypes.func,
  removePic: React.PropTypes.func
};

export default SoloImageWithButton;
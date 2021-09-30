import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

class Dishdetail extends Component{

    constructor(props){
        super(props);
    this.state = {};

  }
  
  renderDish(dish)
  {
    return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>                           
            </div>
          <div className="col-12 col-md-5 m-1">
              
          </div>
        </div>      
    );


  }

    render() {
      const dish = this.props.dishdetail;
      
      
      
      if (dish != null)
      {
        console.log(dish.name);
        return (this.renderDish(dish));   
      
      }
      else
      {
        return ( 
          <div><h1>nothing</h1></div>
        
        );
        

        
      }

    }
}

export default Dishdetail;
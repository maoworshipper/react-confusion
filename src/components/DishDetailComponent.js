import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            mydish: null
        }
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish != null){
            const comm = dish.comments.map( (comments) => {
                var fecha = new Date(comments.date).toUTCString();
                //var months = ["January","February","March","April","May","June","July","August","September","November","December"];
                //fecha = fecha.getMonth() + " " + fecha.getDay() + ", " + fecha.getFullYear();
                return(

                         <ListGroupItem key={comments.id} >
                             {comments.comment}
                            <br/>
                            -- {comments.author}, {fecha}
                         </ListGroupItem>
                                       
                 );
            });
            return(
                <div>
                <h4>Comments</h4>
                <ListGroup type="unstyled">
                {comm}
                </ListGroup>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }        
    }    

    render() {

    return (
    <div className="row">
    <div className="col-12 col-md-5 m-1">
        {this.renderDish(this.props.dishsel)}
    </div>
    <div className="col-12 col-md-5 m-1">
        {this.renderComments(this.props.dishsel)}
    </div>
    </div>
        );

}

}

export default DishDetail;
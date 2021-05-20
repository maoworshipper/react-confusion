import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {

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
               // var fecha = new Date(comments.date).toUTCString();
               
                return(
                    
                         <ListGroupItem key={comments.id} >
                             {comments.comment}
                            <br/>
                            -- {comments.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
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
    <div className="container">    
    <div className="row">
    <div className="col-12 col-md-5 m-1">
        {this.renderDish(this.props.dish)}
    </div>
    <div className="col-12 col-md-5 m-1">
        {this.renderComments(this.props.dish)}
    </div>
    </div>
    </div>
        );

}

}

export default DishDetail;
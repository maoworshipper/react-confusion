import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';



    function RenderDish({dish}){
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

    function RenderComments({comments}){
        if(comments != null){
            const comm = comments.map( (comments) => {
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

    const DishDetail = (props) => {
    if(props.dish != null){
    return (
    <div className="container">    
    <div className="row">
    <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
    </div>
    <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.dish.comments} />
    </div>
    </div>
    </div>
        );
    }
    else{
        return(
            <div></div>
        );
    } 
}



export default DishDetail;
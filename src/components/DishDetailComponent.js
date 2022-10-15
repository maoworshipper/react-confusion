/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import PencilComponent from "./PencilComponent";

function RenderDish({ dish }) {
  if (dish?.id != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <Card>
              <CardBody>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardTitle>
                  <h3>{dish.name}</h3>
                </CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const comm = comments.map((comments) => {
      // var fecha = new Date(comments.date).toUTCString();

      return (
        <ListGroupItem key={comments.id}>
          {comments.comment}
          <br />
          -- {comments.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comments.date)))}
        </ListGroupItem>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ListGroup type="unstyled">{comm}</ListGroup>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const CommentForm = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (values) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  };

  return (
    <>
      <Button
        outline
        color="secondary"
        style={{ marginTop: "15px" }}
        onClick={() => toggle()}
      >
        <PencilComponent />
        <span style={{ marginLeft: "5px" }}>Submit Comment</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="rating" md={2}>
                Rating
              </Label>
              <Col md={10}>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                >
                  <option value={1} selected>
                    1
                  </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="name" md={2}>
                Your Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={2}>
                Comment
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;

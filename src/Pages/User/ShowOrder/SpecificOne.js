import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SpecificOne = ({data}) => {
   const {place , img , Inclusion} = data
    return (
        <div>
         
         <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>
            {Inclusion}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default SpecificOne;
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    console.log(props.news);

    const { urlToImage, title,description } = props.news;


    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                    <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default News;
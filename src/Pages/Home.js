import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../components/home.css'; // Import file CSS

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>GREENTECH IRIGASMART</h1>
          <p className="paragraph"> Greentech irigasmart merupakan alat utuk membantu para petani
              dalam melakukan sistem irigasi otomatis. Diharapkan dapat membantu para petani untuk
              mendorong  penggunaan air secara efisien dengan memanfaatkan sensor kelembapan tanah
              untuk memberikan irigasi yang tepat.</p>
        </Col>
        <Col>
          <img src="https://via.placeholder.com/400" alt="Website" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

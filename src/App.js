import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">My Cool UI Project</h1>
        <p className="subtitle">A Simple React App with a Cool UI</p>
      </header>
      <Container className="main">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Card>
              <Card.Header>Register Now</Card.Header>
              <Card.Body>
                <Card.Text>
                  Fill out the form below to register for our exclusive event and receive a free t-shirt!
                </Card.Text>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="shirt-size">T-Shirt Size</label>
                    <select className="form-control" id="shirt-size">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                    </select>
                  </div>
                  <Button variant="primary" type="submit">Register</Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p>&copy; 2023 My Cool UI Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

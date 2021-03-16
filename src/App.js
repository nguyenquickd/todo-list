
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import SortBar from './components/SortBar';
import SearchBar from './components/SearchBar';
import TaskConfig from './components/TaskConfig';
import Table from './components/TableTask'

function App() {
  return (
    <>
      <Container>
        <Row className="row-head">
            <h1>Project 01 - ToDo List <small>Reactjs</small></h1>
        </Row>

        <Row id="sort-by">
          <Col xs={6}>
            <Row >
              <SortBar></SortBar>
            </Row>
          </Col>
          <Col xs={6}>
            <Button variant="primary" block>Add task</Button>{' '}
          </Col>
        </Row>

        <Row className="noPadding">
          <Col xs={6} className="noPadding">
            <SearchBar></SearchBar>
          </Col>

          <Col xs={6}>
            <TaskConfig></TaskConfig>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table></Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

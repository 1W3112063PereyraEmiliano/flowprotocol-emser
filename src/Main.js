import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { Navbar, Nav, Container, Form, FormControl, Card } from "react-bootstrap"
import { FaHome, FaCloudDownloadAlt } from 'react-icons/fa';
import { TiFlowMerge } from 'react-icons/ti'
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import './flowProtocol.css'

import initialData from './initial-data';
import Column from './column';

function App() {

  const [state, setState] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTagIds = Array.from(start.tagIds);
      newTagIds.splice(source.index, 1);
      newTagIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tagIds: newTagIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTagIds = Array.from(start.tagIds);
    startTagIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tagIds: startTagIds,
    };

    const finishTagIds = Array.from(finish.tagIds);
    finishTagIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tagIds: finishTagIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  useEffect(() => {

  }, [state])

  return (
    <React.Fragment>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/fp-emser.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            flowprotocol
          </Navbar.Brand>
          <Navbar.Collapse>
            <Form className="d-flex mx-5">
              <FormControl
                type="search"
                placeholder="buscar"
                className="me-2 form-control"
                aria-label="buscar"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="mt-0 mb-0"></hr>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#"><FaHome className="me-2"></FaHome> inicio </Nav.Link>
            <Nav.Link href="#"><TiFlowMerge className="me-2"></TiFlowMerge> flujos </Nav.Link>
            <Nav.Link href="#" active={true}><FaCloudDownloadAlt className="me-2"></FaCloudDownloadAlt> generador </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr className="mt-0"></hr>
      <Container>
        <Card className="border-danger border-bottom-0 border-top-0 border-end-0 border-3">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">gráfico</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">xml</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>generador gráfico</Card.Title>
            <DragDropContext onDragEnd={onDragEnd}>
              <Container>
                {state.columnOrder.map(columnId => {
                  const column = state.columns[columnId];
                  const tags = column.tagIds.map(
                    tagId => state.tags[tagId],
                  );

                  return <Column key={column.id} column={column} tags={tags} />;
                })}
              </Container>
            </DragDropContext>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;

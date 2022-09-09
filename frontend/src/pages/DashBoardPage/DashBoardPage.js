import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import OffcanvasSidebar from '../../components/ControlBar/OffcanvasSidebar';
import SideBar from '../../components/ControlBar/SideBar';

const DashBoardPage = () => {
  return (
    <main>
      <div className='main-content pt-5'>
        <Row>
          <Col xs={{ span: 3, order: 1 }}>
            <Card>
              <SideBar />
            </Card>
          </Col>
          <Col xs={{ span: 9, order: 2 }}>
            <Card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odit, fugiat quia quos commodi laudantium laborum
              voluptatem ratione eum voluptatibus quod provident ipsum
              perferendis officiis aliquam non debitis eius iusto. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint distinctio
              omnis, fugiat, molestias praesentium sit natus obcaecati soluta
              sequi nobis aliquid tenetur placeat? Nulla dolores, aliquam est
              tempora voluptatem itaque?
            </Card>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default DashBoardPage;

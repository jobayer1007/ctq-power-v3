import React from 'react';
import parse from 'html-react-parser';
import {
  Button,
  Col,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import EditSection from './Modals/EditSection';

const Details = ({ item, editSection, deleteSection }) => {
  return (
    <div id='articles' className='bg-white'>
      {item && (
        <>
          <header className='ex-header'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-10 offset-xl-1'>
                  <h1>{item && item.title}</h1>
                </div>{' '}
                {/* end of col */}
              </div>{' '}
              {/* end of row */}
            </div>{' '}
            {/* end of container */}
          </header>{' '}
          {/* end of ex-header */}
          {/* end of header */}
          <div className='ex-basic-1 pt-5 pb-5'>
            <div className='container'>
              {item.details !== '' ? item.details && parse(item.details) : null}
            </div>

            {item.attributes
              ? item.attributes.map((data, i) => (
                  <div className='container' key={i}>
                    <Row>
                      <Col md={{ span: 2, order: 1 }}>
                        <EditSection data={data} editSection={editSection} />

                        <OverlayTrigger
                          overlay={
                            <Tooltip id='tooltip-disabled'>
                              Delete Section
                            </Tooltip>
                          }
                        >
                          <Button
                            variant='danger'
                            className='btn-sm ms-2'
                            onClick={() =>
                              deleteSection({ id: data.mainMenuId })
                            }
                          >
                            <i className='fas fa-trash action'></i>
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col md={{ span: 10, order: 9 }}>
                        <h5 className='text-center'>
                          Section Title: {data.title}
                        </h5>
                      </Col>
                    </Row>
                    {data.image && <Image fluid src={data.image} />}
                    <hr />
                    {data.details && parse(data.details)}
                  </div>
                ))
              : null}

            {item.subMenuAts
              ? item.subMenuAts.map((data, i) => (
                  <div className='container' key={i}>
                    <Row>
                      <Col md={{ span: 2, order: 1 }}>
                        <EditSection data={data} editSection={editSection} />

                        <OverlayTrigger
                          overlay={
                            <Tooltip id='tooltip-disabled'>
                              Delete Section
                            </Tooltip>
                          }
                        >
                          <Button
                            variant='danger'
                            className='btn-sm ms-2'
                            onClick={() =>
                              deleteSection({ id: data.subMenuAtId })
                            }
                          >
                            <i className='fas fa-trash action'></i>
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col md={{ span: 10, order: 9 }}>
                        <h5 className='text-center'>
                          Section Title: {data.title}
                        </h5>
                      </Col>
                    </Row>
                    {data.image && <Image fluid src={data.image} />}
                    <hr />
                    {data.details && parse(data.details)}
                  </div>
                ))
              : null}

            {item.subMenus
              ? item.subMenus.map((data, i) => (
                  <div className='container' key={i}>
                    <Row>
                      <Col md={{ span: 10, order: 9 }}>
                        <h5 className='text-center'>Title: {data.title}</h5>
                      </Col>
                    </Row>
                    {data.image && <Image fluid src={data.image} />}
                    <hr />
                    {data.details && parse(data.details)}
                  </div>
                ))
              : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;

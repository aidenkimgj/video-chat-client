import React from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome-join">
          <Form>
            <FormGroup>
              <h1>
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ marginRight: '15px' }}
                />
                Video Chat
              </h1>
            </FormGroup>
            <FormGroup>
              <Input
                name="Your Name"
                placeholder="Your Name"
                required
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="Room Name"
                placeholder="Room Name"
                required
                type="text"
              />
            </FormGroup>

            <Button>Enter Room</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Main;

import React, { useState } from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const nameChange = e => {
    const nickName = e.target.value;
    setName(nickName);
  };

  const roomChange = e => {
    const roomName = e.target.value;
    setRoom(roomName);
  };

  const enterRoom = e => {
    console.log(e.target.value, 'what');
    e.preventDefault();
    if (!name) {
      alert('Please enter your nick name!');
    }
    if (!room) {
      alert('Please enter your room name!');
    }
    const url = `/chat?name=${name}&room=${room}`;
    if (name && room) {
      return (window.location.href = url);
    }
  };

  return (
    <>
      <div className="welcome">
        <div className="welcome-join">
          <Form onSubmit={enterRoom}>
            <FormGroup>
              <h1>
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ marginRight: '18px' }}
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
                onChange={nameChange}
                value={name}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="Room Name"
                placeholder="Room Name"
                required
                type="text"
                onChange={roomChange}
                value={room}
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

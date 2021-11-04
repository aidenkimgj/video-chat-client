import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import queryString from 'query-string';
import socketIOClient from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [mute, setMute] = useState('Mute');
  const [camera, setCamera] = useState('Camera On');
  const muteStatus = useRef();
  const ENDPOINT = process.env.REACT_APP_BASIC_SERVER_URL;
  console.log('endpoin', ENDPOINT);
  const muteSet = e => {
    console.log(e.target.value, 'mute');
    if (mute === 'Mute') {
      setMute('Unmute');
    } else {
      setMute('Mute');
    }
  };

  const cameraSet = e => {
    if (camera === 'Camera On') {
      setCamera('Camera Off');
    } else {
      setCamera('Camera On');
    }
  };

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = socketIOClient(ENDPOINT);
    socket.emit('join', room);
  }, []);

  return (
    <>
      <div className="call">
        <div className="my_stream">
          <video className="my_face" autoPlay playsInline />
        </div>
        <div className="peer_stream">
          <video className="peer_face" autoPlay playsInline />
        </div>
        <Button className="mute" ref={muteStatus} onClick={muteSet}>
          {mute}
        </Button>

        <Button className="camera" onClick={cameraSet}>
          {camera}
        </Button>
      </div>
    </>
  );
};

export default Chat;

import React, { useEffect } from 'react';
import { Button } from 'reactstrap';

let socket;

const Chat = ({ location }) => {
  return (
    <>
      <div className="call">
        <div className="my_stream">
          <video className="my_face" autoPlay playsInline />
        </div>
        <div className="peer_stream">
          <video className="peer_face" autoPlay playsInline />
        </div>
        <Button className="mute">Mute</Button>
        <Button className="camera">Turn Camera Off</Button>
      </div>
    </>
  );
};

export default Chat;

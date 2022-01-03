import React from 'react';
import { Alert } from 'react-bootstrap';

// This children from props but is not passed as Message element but as message body (learn more about it!)
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;

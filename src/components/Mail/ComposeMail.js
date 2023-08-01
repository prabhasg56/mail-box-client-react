import React, { Fragment } from "react";
import { Stack } from "react-bootstrap";

const ComposeMail = () => {
  return (
    <Fragment >
    <div className="p-3 mb-2 bg-secondary vh-100">
    <div className="container bg-white mt-5 p-5">
      <h3>Compose mail</h3>

        <Stack
          className="border-bottom border-dark"
          direction="horizontal"
          gap={3}
        >
          <div className="p-2">To</div>
          <div className="p-2 ms-auto">Cc/Bcc</div>
        </Stack>
        <Stack
          className="border-bottom border-dark"
          direction="horizontal"
          gap={3}
        >
          <div className="p-2">Test Mail</div>
        </Stack>
      </div>
    </div>
    </Fragment>
  );
};

export default ComposeMail;

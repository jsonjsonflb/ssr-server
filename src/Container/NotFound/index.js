import React, { memo } from "react";

const NotFound = memo(props => {

  if (props.staticContext) {
    props.staticContext.NOTFOUND = true;
  }

  return (
    <div>
      <h1>404</h1>
    </div>
  );
});

export default NotFound;

import React from 'react';

const MyName = ({name}) => {
    return (
      <div>
          My Name Is {name} ..!
      </div>
    );
}

MyName.defaultProps = {
    name : 'default value'
}

export default MyName;
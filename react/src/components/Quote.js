import React from 'react';

const Quote = (props) => {
  return (
    <div className="small-10 small-centered columns text-center">
      {props.quote}
    </div>
  )
}

export default Quote;

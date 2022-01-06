import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props}>{props.github}</a>
      <a href={props}>{props.linkedin}</a>
    </>
  )
}

export default Links

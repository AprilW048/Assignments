import React, { createElement } from "react";

const Hello = (props) => {
  console.log(props.children);
  let children = React.Children.toArray(props.children);
  // props.name = "new Name";
  return (
    <div>
      <h1>
        Greetings {props.name} a.k.a {props.heroName}
      </h1>
      {children[0]}
    </div>
  );

  // return React.createElement('div', {id:"txt", className:'dummy'}, React.createElement('h1', null, 'Hi how ru??'));
};

export default Hello;

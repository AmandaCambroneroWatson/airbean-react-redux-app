import React, { Fragment } from 'react';
import '../style/components/Input.scss';

//The htmlFor property sets or returns the value of the for attribute of a label. Here we use it to change the value of the for attribute of a label:


 //React fragments let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM. So basically we use React.Fragment where we would normally use a wrapper div.

 // Istället för att använda Fragment kan man också i stället använda en tom <> för att undvika invalid HTML


 // type, id, refresh props the component needs to render //
 //Den här componenten är kopplad till LoginForm
function InputFields({ type, id, refresh }) {
  return (
    <Fragment>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        onKeyUp={(e) => {
          refresh(e.target.value);
        }}></input>
    </Fragment>
  );
}

export default InputFields;

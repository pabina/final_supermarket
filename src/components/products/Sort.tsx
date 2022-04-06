import React from "react";
import { Form } from "react-bootstrap";

const Sort = (props: any) => {
  return (
    <>
      <div className="sorting">
        <select className="frm-field required sect" onChange={props.handlesort}>
          <option value="null">Default sorting</option>
          <option value="null">Sort by popularity</option>
          <option value="null">Sort by average rating</option>
          <option value="null">Sort by price</option>
        </select>
      </div>
      <div className="sorting-left">
        <Form.Select className="frm-field required sect">
          <option value="null">Item on page 9</option>
          <option value="null">Item on page 18</option>
          <option value="null">Item on page 32</option>
          <option value="null">All</option>
        </Form.Select>
      </div>
      <div className="clearfix"> </div>
    </>
  );
};

export default Sort;

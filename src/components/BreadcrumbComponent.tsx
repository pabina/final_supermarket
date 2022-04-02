import React from "react";

const BreadcrumbComponent = (props: any) => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ol
            className="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li className="active">{props.page}</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbComponent;

import React from "react";

const Pagination = () => {
  return (
    <div className="py-5">
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link text-black" href="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-black" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-black" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-black" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-black" href="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

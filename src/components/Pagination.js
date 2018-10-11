import React from "react";
// import PropTypes from "prop-types";

function Pagination() {
  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>
  );
}



// Pagination.propTypes = {
  // title: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
// };


export default Pagination;
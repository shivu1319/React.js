import React from "react";
import "./Table.css";

function Table() {





  return (
    <div className="container  mt-5">
      <h1>Search Products : Clothes</h1>
      <div className="main">
        <form class="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </form>
        <button type="button" className="btn btn-primary have">
          Create Shourtcut
        </button>

        <div class="container">
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Men's Shirts</td>
                <td>$450</td>
                <td>Fashion</td>
                <td>
                  <div class="btn-group hav">
                    <button type="button" class="btn btn-primary">
                      Read
                    </button> &nbsp;&nbsp;
                    <button type="button" class="btn btn-secondary">
                      Edit
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>&nbsp;&nbsp;
                  </div>
                </td>
              </tr>
              <tr>
              <td>Ladies Shirts</td>
                <td>$450</td>
                <td>Fashion</td>
                <td>
                  <div class="btn-group hav">
                    <button type="button" class="btn btn-primary">
                      Read
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-secondary">
                      Edit
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>&nbsp;&nbsp;
                  </div>
                </td>
              </tr>
              <tr>
              <td>Kurta</td>
                <td>$450</td>
                <td>Fashion</td>
                <td>
                  <div class="btn-group hav">
                    <button type="button" class="btn btn-primary">
                      Read
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-secondary">
                      Edit
                    </button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>&nbsp;&nbsp;
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;

import React from "react";
import { Button } from "react-bootstrap";
import "./SideBarMenu.css";
import { NavLink } from "react-router-dom";

const SideBarMenu = (props) => {
  return (
    <div className="container-fluid">
       
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2 ">
              <span className="ms-1 fs-4 d-none d-sm-inline">Mail Box</span>
            </a>
            <hr className="text-secondary" />
            <Button>
              <i className="bi bi-pencil"></i>
              <NavLink className="d-none d-sm-inline ms-3 fw-bold text-decoration-none text-white" to='/composeMail'>Compose</NavLink>
            </Button>
            <ul class="nav nav-pills flex-column ">
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-inbox"></i>
                  <span className="ms-2 d-none d-sm-inline">Inbox</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-send"></i>
                  <span className="ms-2 d-none d-sm-inline">Sent</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-exclamation-octagon"></i>
                  <span className="ms-2 d-none d-sm-inline">Spam</span>
                </a>
              </li>

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-file-earmark-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Draft</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-trash"></i>
                  <span className="ms-2 d-none d-sm-inline">Trash</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown open mb-2">
            <a
              class="text-decoration-none text-white dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2">Prabhas</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">
                {" "}
                <span className="d-sm-inline">1</span>{" "}
                <span className="d-none d-sm-inline">Profile</span>
              </a>
              <a class="dropdown-item" href="#">
                <span className="d-sm-inline">2</span>{" "}
                <span className="d-none d-sm-inline">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>{props.children}</main>

    </div>
  );
};

export default SideBarMenu;

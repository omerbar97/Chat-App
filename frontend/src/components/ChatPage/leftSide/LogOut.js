import React, { useState } from 'react';
import './LogOutButton.css';
import auth from '../../../services/auth-service';
import { useNavigate } from "react-router-dom";

function LogOut({ setAuthenticated }) {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function handleIconClick() {
    setShowModal(true);
  }

  function handleLogout() {
    setShowModal(false);
    setAuthenticated(false);
    auth.logout();
    navigate("/");
  }

  function handleCancel() {
    setShowModal(false);
  }

  return (
    <>
      <button
        type="button"
        id="logoutBtn"
        className="btn log-out-btn"
        onClick={handleIconClick}
        data-bs-toggle="tooltip" // Add the data-bs-toggle attribute for tooltip
        data-bs-custom-class="custom-tooltip"
        data-bs-placement="top"
        title="Log Out" // Specify the tooltip text

      >
        <svg
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-left log-out-img"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            fillRule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title logOutModalTitle">Are you sure you want to log out?</h5>
                {/* <button type="button" className="close" onClick={handleCancel}>
                  <span aria-hidden="true">&times;</span>
                </button> */}

              </div>
              <div className="modal-body danger-btn">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>
                  Log Out
                </button>
                <p></p>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleLogout}>
                  Log Out
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogOut;

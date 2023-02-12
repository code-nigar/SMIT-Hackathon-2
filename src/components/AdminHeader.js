import React from "react";
import "./adminHeader.css";

export default function AdminHeader(props) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-baseline shadow-sm p-2">
      <div>
        <img
          src={process.env.PUBLIC_URL + '/userAvatar.png'}
          alt="admin profile"
          className="admin-profile-image"
        />
      </div>
      <div>
        <p className="admin-detail mx-2">
          {props.adminName}
        </p>
      </div>
    </div>
  );
}

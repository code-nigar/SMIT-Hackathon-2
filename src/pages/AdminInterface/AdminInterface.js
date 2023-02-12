import React , { useState }from "react";
import AdminHeader from "../../components/AdminHeader";
import AllProducts from "./AllProducts";
import { useParams } from "react-router-dom";
import AddNewItem from "./AddNewItem";
import AdminAccount from "./AdminAccount";

export default function AdminInterface() {
    
  const { id } = useParams();
  const [toggleTab, setToggleTab] = useState(1);
  const showContent = (tabNo) => {
    if(tabNo === 2){
      return (
        <AddNewItem/>
      )
    }
    else if (tabNo === 3) {
      return(
        <AdminAccount/>
      )
    } else {
      return (
        <AllProducts/>
      )
    }
  }
  return (
    <div>
      <AdminHeader adminName="Sharjeel" />

      {showContent(toggleTab)}

      <div className="action-bar d-flex flex-row justify-content-around align-items-center">
        <button className="btn" onClick={()=>{setToggleTab(1)}}>
          home
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
        </button>
        <button className="btn" onClick={()=>{setToggleTab(2)}}>
          Add Items
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
        <button className="btn" onClick={()=>{setToggleTab(3)}}>
          account
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

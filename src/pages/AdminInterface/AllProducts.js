import ProductCard from "../../components/ProductCard";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../conf/config";

export default function AllProducts() {
  const [CL_data, setCL_Data] = useState([]);

  //fetch listing data on initial load
  useEffect(() => {
    getListingData();
  }, []);

  const q = query(collection(db, "Products"));

  // var CL_data =[];

  const getListingData = async () => {
    //  const q = query(collection(db, "Businesses"), where("postedBy", "==", {id}));
    let dataobt = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      //setCL_Data(CL_data.push(doc.data()));
      //dataobt.push(doc.data());
      dataobt.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setCL_Data(dataobt);
  };

  const renderListingCard = (cld) => {
    //get array of objects
    console.log("cld ==> ", cld);
    if (cld.length) {
      //render each document as a card
      return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          {cld.map((x) => (
            <ProductCard
              productImg={x.data.productImageUrl}
              price={x.data.productPrice}
              productTitle={x.data.productName}
              unit={x.data.productUnit}
            />
          ))}
        </div>
      );
    } else {
      return (
        <>
          <p>loading..</p>
        </>
      );
    }
  };

  return (
    <>
      {renderListingCard(CL_data)}
    </>
  );
}

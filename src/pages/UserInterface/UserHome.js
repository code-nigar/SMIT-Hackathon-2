import React from "react";
import "./userHome.css";
import Carousel from "react-bootstrap/Carousel";
import ProductListingItem from "../../components/ProductListingItem";

const objArr = [
  {
    productImage:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00201710000001/d6e11f0d737c43ffec93ef0173da52d6_large.png&width=256&type=webp&quality=80",
    productTitle: "the prod",
    productDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magnam, veniam optio, vero nobis ipsa dignissimos id sequi quasi, ratione repudiandae blanditiis. Deleniti velit aperiam necessitatibus maxime perspiciatis quam facilis doloremque animi ratione? Iusto ut mollitia illum delectus labore ad quisquam porro exercitationem natus fugit excepturi harum perferendis quaerat enim et incidunt ab reprehenderit tempore velit rerum, aliquam sapiente! Rerum libero provident nihil beatae molestias nulla alias, dolorem harum, ex, doloremque voluptates pariatur quos tenetur totam quasi illo odit voluptas asperiores rem voluptatum maxime fuga nostrum fugiat. Expedita consectetur maiores, delectus earum hic, laboriosam velit in eaque omnis, dolorem soluta.",
    productPrice: "100",
    productUnit: "kg",
  },
  {
    productImage:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00201710000001/d6e11f0d737c43ffec93ef0173da52d6_large.png&width=256&type=webp&quality=80",
    productTitle: "the prod",
    productDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magnam, veniam optio, vero nobis ipsa dignissimos id sequi quasi, ratione repudiandae blanditiis. Deleniti velit aperiam necessitatibus maxime perspiciatis quam facilis doloremque animi ratione? Iusto ut mollitia illum delectus labore ad quisquam porro exercitationem natus fugit excepturi harum perferendis quaerat enim et incidunt ab reprehenderit tempore velit rerum, aliquam sapiente! Rerum libero provident nihil beatae molestias nulla alias, dolorem harum, ex, doloremque voluptates pariatur quos tenetur totam quasi illo odit voluptas asperiores rem voluptatum maxime fuga nostrum fugiat. Expedita consectetur maiores, delectus earum hic, laboriosam velit in eaque omnis, dolorem soluta.",
    productPrice: "100",
    productUnit: "kg",
  },
  {
    productImage:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00201710000001/d6e11f0d737c43ffec93ef0173da52d6_large.png&width=256&type=webp&quality=80",
    productTitle: "the prod",
    productDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magnam, veniam optio, vero nobis ipsa dignissimos id sequi quasi, ratione repudiandae blanditiis. Deleniti velit aperiam necessitatibus maxime perspiciatis quam facilis doloremque animi ratione? Iusto ut mollitia illum delectus labore ad quisquam porro exercitationem natus fugit excepturi harum perferendis quaerat enim et incidunt ab reprehenderit tempore velit rerum, aliquam sapiente! Rerum libero provident nihil beatae molestias nulla alias, dolorem harum, ex, doloremque voluptates pariatur quos tenetur totam quasi illo odit voluptas asperiores rem voluptatum maxime fuga nostrum fugiat. Expedita consectetur maiores, delectus earum hic, laboriosam velit in eaque omnis, dolorem soluta.",
    productPrice: "100",
    productUnit: "kg",
  },
];

export default function UserHome() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="top-bar d-flex flex-row justify-content-between align-items-center mt-3">
        <div className="d-flex flex-column justify-content-start align-items-start text-uppercase">
          <h3 className="heading">Saylani Welfare</h3>
          <p className="sub-heading">Discount store</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://t3.ftcdn.net/jpg/03/35/74/56/360_F_335745675_MaxYxSsadrviZdThITuHB2oCohYOiwEu.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-img"
              src="https://cdn.metro-online.com/-/media/Project/MCW/PK_Metro/2020-to-2021/Product-World-2021/14-Grocery-World.jpg?rev=2a4b13f3d92f4567bd71e474fbb178e7&w=1392&hash=4D1BE60C656A4F3EFCC98BDB2FD8E53C"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="mt-4">
        <h2 className="text-align-left">Shop By Category</h2>
        {objArr.map((x) => {
          return (
            <>
              <ProductListingItem
                productDescription={x.productDescription}
                productImage={x.productImage}
                productPrice={x.productPrice}
                productTitle={x.productTitle}
                productUnit={x.productUnit}
              />
            </>
          );
        })}
      </div>

      <div className="action-bar d-flex flex-row justify-content-around align-items-center">
        <button className="btn">
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
        <button className="btn">
          cart
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </button>
        <button className="btn">
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

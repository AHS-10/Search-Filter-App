// import React, { useEffect, useState } from "react";
import "../App.css";
// import axios from "axios";
import data from "../data.json";

function Cards(props) {
  // const [aip, setAip] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setAip(response.data);
  //       console.log(aip);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  // },[]);
  return (
    <>
      <div className="container">
        <div className="row">
          {data
            .filter((item) => {
              if (props.userSearch === "") {
                return item;
              } else if (
                item.title
                  .toLowerCase()
                  .includes(props.userSearch.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item,index) => {
              return (
                <div className="col-sm-4 p-3" key={index}>
                  <div className="card shadow-sm ">
                    <img
                      alt="Card image cap"
                      className="card-img-top img-fluid pt-4"
                      src={item.image}
                    />
                    <hr />
                    <div className="card-body ">
                      <p><b>{item.title}</b></p>
                      {/* <p className="card-text">
                        {item.description}
                      </p> */}
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <small className="text-muted">
                          Price - <b>${item.price}</b>
                        </small>
                        <small className="text-muted">
                          Rating - <b>{item.rating.rate}</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* {api
        .filter((item) => {
          if (props.userSearch === "") {
            return item;
          } else if (
            item.title.toLowerCase().includes(props.userSearch.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return <h1> {item.title} </h1>;
        })} */}
      {/* <div>
        {api.map((item, index) => {
          return <p key={index}>{item.title}</p>;
        })}
      </div> */}
    </>
  );
}

export default Cards;

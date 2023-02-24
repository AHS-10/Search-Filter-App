import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function Cards(props) {
  const [api, setApi] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setApi(response.data);
        console.log(api);
      })
      .catch((error) => {
        // console.log(error);
      });
  });
  return (
    <>
      <div className="container">
        <div className="row">
          {api
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
            .map((item) => {
              return (
                <div className="col-sm-4 p-3">
                  <div class="card shadow-sm ">
                    <img
                      alt="Card image cap"
                      className="card-img-top img-fluid pt-4"
                      src={item.image}
                    />
                    <hr />
                    <div class="card-body ">
                      <p><b>{item.title}</b></p>
                      {/* <p class="card-text">
                        {item.description}
                      </p> */}
                      <div class="d-flex justify-content-between align-items-center py-2">
                        <small class="text-muted">
                          Price - <b>${item.price}</b>
                        </small>
                        <small class="text-muted">
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

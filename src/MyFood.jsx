import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const MyFood = () => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    const { data } = await axios("https://fun-food.onrender.com/my-foods");
    setFoods(data.foods);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your Orders</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "1px solid",
                padding: "15px",
              }}
            >
              Sr.no
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid",
                padding: "15px",
              }}
            >
              User Name
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid",
                padding: "15px",
              }}
            >
              Food Item
            </th>
          </tr>
        </thead>
        <tbody>
         
            {foods?.length
              ? foods.map((food, ind) => {
                  return (
                    <>
                     <tr>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid",
                          padding: "15px",
                        }}
                      >
                        {ind + 1}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid",
                          padding: "15px",
                        }}
                      >
                        {food.name}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          border: "1px solid",
                          padding: "15px",
                        }}
                      >
                        {food.foodName}
                      </td>
                      </tr>
                    </>
                  );
                })
              : ""}
         
        </tbody>
      </table>
    </div>
  );
};

export default MyFood;

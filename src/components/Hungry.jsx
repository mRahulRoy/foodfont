import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import amitabh from "../assets/amitabh-bachchan.mp4";
import kyaBola from "../assets/kya-bola-tune.mp4";
import andeWalaBurger from "../assets/ande-wala.gif";
import waah from "../assets/hindustani-bhau-kya-soch-hai-re-teri.mp4";
import orderDoneImage from "../assets/thoda-sa-delay-hoga-sachin-saxena.mp4";
import sorry from "../assets/puneet-superstar-meme-lord-puneet-meme.mp4";

import axios from "axios";

const Hungry = () => {
  const [ishungry, setIsHungry] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const [bhukadName, setBhukadName] = useState("");
  const [orderDone, setOrderDone] = useState(false);
  const [shouldShowSorry, setShouldShowSorry] = useState(false);

  function handleFoodChange(e) {
    setSelectedFood(e.target.value);
  }

  async function handleFoodOrder() {
    setShouldShowSorry(true)
    if (!setSelectedFood || !bhukadName) {
      toast.warning("Khana chahiye toh apna naam or food dono batao 🤭");
      return;
    }   

    if(selectedFood === "kulhad"){
      return;
    }
     
      const data = await axios.post("https://fun-food.onrender.com/order", {
        foodName: selectedFood,
        name: bhukadName,
      });
    
    setOrderDone(true);

    toast.success("Item ordered Sir!");
    
  }

  useEffect(() => {
    localStorage.setItem("partyOrder", [{}]);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {orderDone ? (
        <>
          <h1>Order Sucess : {bhukadName}</h1>
          <video src={orderDoneImage} autoPlay={true} loop={true}></video>
         
        </>
      ) : (
        <div>
          <h2>Are you hungry ? </h2>
          {ishungry === true ? (
            <>
              <h2>Haaa free ka hai khalo</h2>
              <p>Kya khaoge btao ?</p>
            </>
          ) : (
            <div style={{ display: "flex", gap: "40px" }}>
              <button
                style={{ padding: "10px", borderRadius: "3px" }}
                onClick={() => {
                  setIsHungry(true);
                }}
              >
                Yes 😋
              </button>
              <button style={{ padding: "10px", borderRadius: "3px" }} onClick={()=>{toast.warning("PLease khalo (In Anupansh's voice)")}}>
                No 😐
              </button>
            </div>
          )}

          {ishungry === true ? (
            <div>
              <div>
                <div>
                  <label htmlFor="name" style={{ marginRight: "12px" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={bhukadName}
                    onChange={(e) => {
                      setBhukadName(e.target.value);
                    }}
                    placeholder="put your name here"
                  />
                </div>
                <p>choose free food item</p>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div>
                    <label htmlFor="chilli-potato">Chilli Potato</label>
                    <input
                      type="checkbox"
                      name="chilli-potato"
                      id="chilli-potato"
                      value={"chilli-potato"}
                      onChange={(e) => {
                        handleFoodChange(e);
                      }}
                      checked={selectedFood === "chilli-potato"}
                    />
                  </div>

                  {selectedFood === "chilli-potato" ? (
                    <img src={andeWalaBurger} width={240} height={240} />
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div>
                    <label htmlFor="momos">Momos</label>
                    <input
                      type="checkbox"
                      name="momos"
                      id="momos"
                      value={"momos"}
                      onChange={(e) => {
                        handleFoodChange(e);
                      }}
                      checked={selectedFood === "momos"}
                    />
                  </div>
                  {selectedFood === "momos" ? (
                    <video src={waah} autoPlay={true} loop={true}></video>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div>
                    <label htmlFor="chawmin">Chawmin</label>
                    <input
                      type="checkbox"
                      name="chawmin"
                      id="chawmin"
                      value={"chawmin"}
                      onChange={(e) => {
                        handleFoodChange(e);
                      }}
                      checked={selectedFood === "chawmin"}
                    />
                  </div>
                  {selectedFood === "chawmin" ? (
                    <video src={kyaBola} autoPlay={true} loop={true}></video>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div>
                    <label htmlFor="chawmin">Daal chaval</label>
                    <input
                      type="checkbox"
                      name="chawmin"
                      id="chawmin"
                      value={"kulhad"}
                      checked={selectedFood === "kulhad"}
                      onChange={(e) => {
                        setSelectedFood("kulhad");
                      }}
                      //   disabled
                    />
                  </div>
                  {selectedFood === "kulhad" ? (
                    <video src={shouldShowSorry ? sorry : amitabh} autoPlay={true} loop={true}></video>
                  ) : (
                    ""
                  )}
                </div>

                <div style={{ margin: "25px 0" }}>
                  <button
                    style={{ padding: "10px", borderRadius: "3px" }}
                    onClick={handleFoodOrder}
                  >
                    send me food 🤭
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Hungry;

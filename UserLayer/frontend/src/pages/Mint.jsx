import React, { useState } from "react";
import db from "../mint/db.json";
import MintList from "../mint/MintList";
import AuthService from "../services/auth.service";
import OrderService from "../services/order.service";
import axios from "axios";
import usePageTitle from '../../src/hooks/usePageTitle';

axios.defaults.withCredentials = true;
function Mint() {
  usePageTitle("Mint");

  const user = AuthService.getCurrentUser();
  //console.log(user);
  const [activeSlide, setActiveSlide] = useState("minted");
  const realdatas = OrderService.getOrders(user.id);
  console.log(realdatas)


  function handleSlideClick(slide) {
    setActiveSlide(slide);
    setDatas(db.metadata.filter((data) => data.state === slide));
  }
  const [datas, setDatas] = useState(
    db.metadata.filter((data) => data.state === activeSlide)
  );

  return (
    <div className="">
      <div className="flex items-center justify-center h-60">
      <button
          className="mx-auto my-auto"
          onClick={() => handleSlideClick("minted")}
        >
          minted
        </button>
        <button
          className="mx-auto my-auto"
          onClick={() => handleSlideClick("verified")}
        >
          verified
        </button>
        <button
          className="mx-auto my-auto"
          onClick={() => handleSlideClick("pending")}
        >
          pending
        </button>
        <button
          className="mx-auto my-auto"
          onClick={() => handleSlideClick("rejected")}
        >
          rejected
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <MintList datas={datas} activeSlide={activeSlide} />
      </div>
    </div>
  );
}

export default Mint;

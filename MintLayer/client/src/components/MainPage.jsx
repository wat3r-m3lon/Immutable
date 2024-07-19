import {useState} from "react";
import Button from "./Button";
import MintList from "./MintList";
import axios from "axios";
import ConnectButton from "./ConnectButton";


function MainPage() {
  const [datas, setDatas] = useState([]);

  function fetchData() {
    axios.get("/api/metadata", {
      params: {
        state: "pending"
      }
    })
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ConnectButton/>
      <Button title="fetch data" onClick={fetchData}/>
      <MintList datas={datas}/>
    </div>


  );
}

export default MainPage;
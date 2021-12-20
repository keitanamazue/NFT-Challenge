import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { PunkList } from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x77FEc916B43EEe31f1721e9011EBAeD6060cc8af&order_direction=asc"
      );
      //   0x77FEc916B43EEe31f1721e9011EBAeD6060cc8af
      //   0x912EbA6F509297E2BA0eBEF426eb6f190F0f8408

      console.log(openseaData);
      setPunkListData(openseaData);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;

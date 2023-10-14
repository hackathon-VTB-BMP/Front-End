import axios from "axios";
import "./App.css";
import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useQuery } from "react-query";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./components/DrawerComponent";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataProps, setDataProps] = useState();

  const getOffices = async () => {
    const data = await axios.get("http://localhost:3000/office");
    return data.data;
  };

  const { data } = useQuery("offices", getOffices);

  const handleClick = (marker) => {
    onOpen();
    setDataProps(marker);
  };

  return (
    <YMaps
      query={{ lang: "en_RU", apikey: "53b6fdca-2776-4953-9525-5ba28ea6ea85" }}
    >
      <Map
        width="100%"
        height="99.9vh"
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        {data &&
          data.map((marker) => (
            <Placemark
              options={{
                iconLayout: "default#image",
                iconImageHref: "images/VTB_icon.svg",
                iconImageSize: [70, 70],
                iconImageOffset: [-20, -40],
              }}
              key={marker.salePointName}
              geometry={[marker.latitude, marker.longitude]}
              onClick={() => handleClick(marker)}
            />
          ))}
        <DrawerComponent
          onClose={onClose}
          isOpen={isOpen}
          dataProps={dataProps}
        />
      </Map>
    </YMaps>
  );
}

export default App;

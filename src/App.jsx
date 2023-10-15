import axios from "axios";
import "./App.css";
import { SidePanel } from "./components/sidePanel/SidePanel.jsx";
import { useState, useRef, useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useQuery } from "react-query";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./components/drawer-components/DrawerComponent";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataProps, setDataProps] = useState();

  const [ymaps, setYmaps] = useState(null);
  const map = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    } else {
      console.error("Geolocation is not supported by your browser");
    }

    getNearby();
  }, []);

  const getNearby = async () => {
    const data = await axios.get(
      `http://91.222.236.93:8080/nearby?latitude=${userLocation[0]}&longitude=${userLocation[1]}&radius=10000`
    );
    return [data.data];
  };

  const getOffices = async () => {
    const data = await axios.get("http://91.222.236.93:8080/offices");
    return data.data._embedded.offices;
  };

  const getAtms = async () => {
    const data = await axios.get("http://91.222.236.93:8080/atms");
    return data.data._embedded.atms;
  };

  const { data } = useQuery("offices", getOffices);
  const { data: dataAtms } = useQuery("atms", getAtms);
  const { data: nearbyOffice } = useQuery("nearby", getNearby);

  const handleClick = (marker) => {
    onOpen();
    setDataProps(marker);
  };

  const addRoute = (myPoint, pointB) => {
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [myPoint, pointB],
        params: {
          routingMode: "pedestrian",
        },
      },
      {
        boundsAutoApply: true,
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <>
      <YMaps
        query={{
          lang: "en_RU",
          apikey: "53b6fdca-2776-4953-9525-5ba28ea6ea85",
        }}
      >
        <Map
          width="100%"
          height="99.9vh"
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          modules={["multiRouter.MultiRoute"]}
          onLoad={(ymap) => setYmaps(ymap)}
          instanceRef={map}
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
          {dataAtms &&
            dataAtms.map((marker) => (
              <Placemark
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "images/VTB_atms.svg",
                  iconImageSize: [70, 70],
                  iconImageOffset: [-20, -40],
                }}
                key={marker.code}
                geometry={[marker.latitude, marker.longitude]}
                onClick={() => handleClick(marker)}
              />
            ))}
          {nearbyOffice &&
            nearbyOffice.map((marker) => (
              <Placemark
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "images/VTB_atms.svg",
                  iconImageSize: [150, 150],
                  iconImageOffset: [-20, -40],
                }}
                key={marker.code}
                geometry={[marker.latitude, marker.longitude]}
                onClick={() => handleClick(marker)}
              />
            ))}

          <DrawerComponent
            onClose={onClose}
            isOpen={isOpen}
            dataProps={dataProps}
            addRoute={addRoute}
            userLocation={userLocation}
          />
        </Map>
      </YMaps>

      <SidePanel />
      {/* <Quiz /> */}
    </>
  );
}

export default App;

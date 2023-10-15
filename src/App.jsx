import axios from "axios";
import "./App.css";
import { SidePanel } from "./components/sidePanel/SidePanel.jsx";
import { Quiz } from "./components/quiz/Quiz.jsx";
import { useState, useRef, useEffect } from "react";
import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { useQuery } from "react-query";
import { useDisclosure } from "@chakra-ui/react";
import DrawerComponent from "./components/drawer-components/DrawerComponent";

function App() {
<<<<<<< HEAD
=======
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataProps, setDataProps] = useState();

>>>>>>> Sergey_02
  const [ymaps, setYmaps] = useState(null);
  const map = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataProps, setDataProps] = useState();

  const handleClick = (marker) => {
    onOpen();
    setDataProps(marker);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);

  const getOffices = async () => {
    const data = await axios.get("http://localhost:3000/office");
    return data.data;
  };

  const { data } = useQuery("offices", getOffices);

<<<<<<< HEAD
=======
  const handleClick = (marker) => {
    onOpen();
    setDataProps(marker);
  };

>>>>>>> Sergey_02
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
              />
            ))}
          <Clusterer
            options={{
              preset: "islands#darkBlueCircleIcon",
              groupByCoordinates: false,
            }}
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
          </Clusterer>

          <DrawerComponent
            onClose={onClose}
            isOpen={isOpen}
            dataProps={dataProps}
            addRoute={addRoute}
            userLocation={userLocation}
          />
        </Map>
      </YMaps>
<<<<<<< HEAD
      <SidePanel />
      {/* <Quiz /> */}
    </>
=======
      <SidePanel/>
      {/*<Quiz/>*/}
  </>
>>>>>>> Sergey_02
  );
}

export default App;

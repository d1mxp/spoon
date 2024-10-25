import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap: React.FC = () => {
  const mapState = {
    center: [59.83, 30.14],
    zoom: 10,
  };

  const APIkey = "7af3b7a1-0db7-4752-953d-64528db9c008";

  return (
    <div className="map">
      <YMaps query={{ apikey: APIkey }}>
        <Map state={mapState} style={{ width: "100%", height: "100%" }}>
          <Placemark
            geometry={[59.830499, 30.142152]}
            properties={{
              balloonContent: "",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;

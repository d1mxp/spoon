import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap: React.FC = () => {
  const mapState = {
    center: [59.9132, 30.313],
    zoom: 12,
  };

  const APIkey = "539fb186-89d1-4e25-aba3-8c16dba7112d";

  return (
    <div className="map">
      <YMaps query={{ apikey: APIkey }}>
        <Map state={mapState} style={{ width: "100%", height: "100%" }}>
          <Placemark
            geometry={[59.913244, 30.313011]}
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

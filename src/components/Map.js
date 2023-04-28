import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import localizationIco from "../public/img/place.png";

const Map = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

  const markers = [
    {
      markerOffset: -25,
      name: "Cracow, Poland",
      coordinates: [19.9445, 50.0496],
    },
  ];

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Geographies
        geography={geoUrl}
        fill="#dee1dd"
        stroke="#28363d"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontFamily: "system-ui",
              fill: "#5D5A6D",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;

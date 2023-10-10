import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { google_map_apikey } from "./src/api/googleMap";

let center = {}
export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:google_map_apikey
  });

  center={lat:props.lat,lng:props.lng}
  if (!isLoaded) return <div>Loading...</div>;
  return <Layout />;
}

function Layout() {

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container" mapContainerStyle={{ width: "100vw", height: "100vh" }}>
      <Marker position={center} />
    </GoogleMap>
  );
}
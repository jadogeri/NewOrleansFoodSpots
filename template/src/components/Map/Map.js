import { useMemo } from "react";
import { View } from "react-native";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { google_map_apikey } from "../../api/googleMap";
import styles from "./MapStyles";

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
    <View style={styles.container}>  
       <GoogleMap zoom={17} center={center} //mapContainerClassName="map-container" 
    mapContainerStyle={{ width: '75vw', height: "50vh" }}
    >
      <Marker position={center} />
    </GoogleMap>
    </View>
  );
}
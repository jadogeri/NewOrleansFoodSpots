import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";  
import styles from "./MapStyles";

let center = {}
export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:""
    //process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  center={lat:props.lat,lng:props.lng}
  if (!isLoaded) return <div>Loading...</div>;
  return <Layout />;
}

function Layout() {

  return (
    <div style={styles.container}>  
       <GoogleMap zoom={17} center={center} //mapContainerClassName="map-container" 
    mapContainerStyle={{ width: '75vw', height: "50vh" }}
    >
      <Marker position={center} />
    </GoogleMap>
    </div>
  );
}
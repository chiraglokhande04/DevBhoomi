import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [30.7333, 76.7794]; // Coordinates for Chandigarh, India

  return (
    <div className="w-full h-screen">
      <MapContainer center={position} zoom={10} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>SCO No. 13, 2nd Floor, Metro Plaza, Chandigarh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

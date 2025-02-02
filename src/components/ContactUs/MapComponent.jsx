import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Use import instead of require
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  const position = [30.7333, 76.7794];
  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <div className="w-full h-72 relative">
      <MapContainer center={position} zoom={10} style={{ height: "100%", width: "100%", position: "relative" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>SCO No. 13, 2nd Floor, Metro Plaza, Chandigarh</Popup>
        </Marker>
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => window.open(googleMapsUrl, "_blank")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg"
          >
            View Larger Map
          </button>
        </div>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

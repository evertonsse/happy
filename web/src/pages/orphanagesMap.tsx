import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mapMarker from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"



function OrphamagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas criaças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong> Camaçari</strong>

          <strong> Bahia </strong>
        </footer>
      </aside>

      <MapContainer
        center={[-12.7353837, -38.3259047]}
        zoom={16}
        style={{width:'100%', height:'100%'}}
        
      >
        {/* <TileLayer url ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphamagesMap;

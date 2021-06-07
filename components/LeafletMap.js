import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";

const ICON = icon({
    iconUrl: "/marker.svg",
    iconSize: [32, 32],
  })

export default function LeafletMap({ updateData }) {
    return ( 

        <MapContainer center={[updateData.Lat, updateData.Lon]} zoom={4} scrollWheelZoom={false} style={{height:"100%", width: "100%"}}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />

                <Marker icon={ICON} position={[updateData.Lat, updateData.Lon]}>

                    <Popup>
                       { updateData.Country} is located here
                    </Popup>

                </Marker>

        </MapContainer>


    )
}

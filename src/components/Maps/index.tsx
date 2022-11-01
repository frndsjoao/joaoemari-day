import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

export default function MapsGoogle() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKqbCoZ-SLDg9O7LcUcuAvlkVoxoZlDWA"
  })

  const position = {
    lat: -19.897733081690564,
    lng: -43.97070715801429
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={position}
      zoom={17}
      clickableIcons={false}

    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  )
}
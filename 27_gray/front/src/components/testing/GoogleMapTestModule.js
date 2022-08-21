import React from 'react'
import { GoogleMap, useJsApiLoader,Marker  } from '@react-google-maps/api';
import env from "react-dotenv";

const containerStyle = {
    width: '800px',
    height: '400px'
};

const centerHarchatovka = {
    lat: 47.001832855600000,
    lng: 32.119632813600000
};
// 46.4855934,30.7294076
const center = {
    lat: 46.4855934,
    lng: 30.7294076
};
const zoom = 3

function GoogleMapTestModule() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            defaultZoom={2}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />

        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapTestModule)
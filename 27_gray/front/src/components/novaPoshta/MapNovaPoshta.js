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
let center = {
    lat: 46.482084,
    lng: 30.731121
};
const zoom = 3

function MapNovaPoshta(props) {
    console.log("Отделения:")
    // props.warehouses.map(wh=>{
    //     console.log(wh.Latitude + " " + wh.Longitude)
    // })
    if (props.warehouses[0]) {
        center = {
            lat: parseFloat(props.warehouses[0].Latitude),
            lng: parseFloat(props.warehouses[0].Longitude)
        }
    }


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
            // defaultZoom={zoom}
            // zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {props.warehouses.map(wh => {
                console.log(wh.Latitude + " " + wh.Longitude)
                // let pos;
                let pos = {lat: parseFloat(wh.Latitude), lng: parseFloat(wh.Longitude) }
                return (
                    <Marker
                        // icon={"https://play-lh.googleusercontent.com/mtyOm0Rp0PeG_BWE7M5j9gBWuU1Du34LLj-dLdSE1-006_BkFg32W3Cca00l2BBvNM0"}
                        key={wh.Ref} position={pos} />
                )
            })}

        </GoogleMap>
    ) : <></>
}

export default React.memo(MapNovaPoshta)
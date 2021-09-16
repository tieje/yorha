import { useState }  from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { LoadingError, LoadingIcon } from "./styles";
import { Marker } from '@react-google-maps/api';
import { useAppState } from './state/AppStateContext';

/*
const options = {
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,

        // ...otherOptions
    }
}
*/
const containerStyle = {
    width: '300px',
    height: '300px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};
export const Map = () => {
    const { markerPosition } = useAppState()
    const [ markerState, setMarkerState] = useState(markerPosition)
    const MapDragEnd = (e: google.maps.MapMouseEvent): void => {
        setMarkerState(e.latLng)
    }
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: '' // ,
        // ...otherOptions\
    })

    const renderMap = () => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that
        /*
        const onLoad = React.useCallback(
            function onLoad(mapInstance) {
                // do something with map Instance
            }
        )
        */
        return <GoogleMap
            /*options={options}*/
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        /*onLoad={onLoad}*/
        >
            <Marker
                position={markerState}
                draggable={true}
                onDragEnd={MapDragEnd}
            />
            {
                // ...Your map components
            }
        </GoogleMap>
    }

    if (loadError) {
        return <LError></LError>
    }

    return isLoaded ? renderMap() : <LIcon></LIcon>
}

const LIcon = () => {
    return (
        <LoadingIcon>
            I'm loading. Fancy animations are for later
        </LoadingIcon>
    )
}
const LError = () => {
    return (
        <LoadingError>
            Some loading error occurred. Not sure how to test this yet.
        </LoadingError>
    )
}

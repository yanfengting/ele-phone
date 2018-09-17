import {
    SET_LOCATION,
    SET_LOCATION_DETAIL
} from './mution-types'

export default {
    [SET_LOCATION](state, location) {
        localStorage.setItem('location', JSON.stringify(location));
        state.location = location;
    },
    [SET_LOCATION_DETAIL](state, locationDetail) {
        localStorage.setItem('locationDetail', JSON.stringify(locationDetail));
        state.locationDetail = locationDetail;
    }
}
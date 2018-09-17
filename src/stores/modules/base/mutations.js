import {
    SET_LOCATION,
    SET_CITY
} from './mution-types'

export default {
    [SET_CITY](state, city) {
        state.city = city;
    },
    [SET_LOCATION](state, point) {
        state.lng = point.lng;
        state.lat = point.lat;
    }
}
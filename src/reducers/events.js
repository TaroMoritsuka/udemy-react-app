import { READ_EVENTS } from '../Actions'
import _ from 'lodash'
export default (events = {}, action) => {
    switch(action.type){
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}

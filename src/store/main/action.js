import axios from 'axios'
import { GET_MAIN_LIST , GET_MAIN_HOT_CLASSIFY_LIST} from './actionType'
const action = {
    getList() {
        return {
            type : GET_MAIN_LIST,
            payload : axios.get('/mock/cookbook-list.json')
        }
    },
    hotClassifyList () {
        return {
            type : GET_MAIN_HOT_CLASSIFY_LIST,
            payload : axios.get('/mock/cookbook-category.json')
        }
    }
}

export default action;
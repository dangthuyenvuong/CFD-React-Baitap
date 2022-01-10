import { API } from "../constant";
import {callApiWithToken} from "../utils";

const cardService = {
    getCard() {
        return callApiWithToken(`${API}/ecommerce/v1/cart`)
    }
}

export default cardService;
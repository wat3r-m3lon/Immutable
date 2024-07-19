import axios from "axios";

const API_URL = "http://localhost:8080/api/order/";

const getOrders = (userId) => {
  axios.get(API_URL + userId).then((response) => {
    return response.data;
  })
}

const OrderService = {
  getOrders,
}

export default OrderService;
import axios from "axios";

const API_URL = "http://localhost:8080/api/subscriptions/";

const createSubscription = (subscription) => {
    return axios.post(API_URL + "plan", subscription);
};

const getSubscriptionPlan = (id) => {
    return axios.get(API_URL + "plan/" + id);
};

const deleteSubscriptionPlan = (id) => {
    return axios.delete(API_URL + "plan/" + id);
};

const SubscriptionService = {
    createSubscription,
    getSubscriptionPlan,
    deleteSubscriptionPlan,
};

export default SubscriptionService;

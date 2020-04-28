const initState = {
    company: {},
    customer: {},
    order: {},
    orderItems: {}
};

const rootReducers = (state = initState, action) => {
    // console.log(action.company);
    switch (action.type) {
        case "mountCompany":
            return {
                ...state,
                company: action.company
            };
        case "mountCustomerDetails":
            return {
                ...state,
                customer: action.customer
            };
        case "mountOrder":
            return {
                ...state,
                order: action.order
            };
        case "mountOrderItems":
            return {
                ...state,
                orderItems: action.orderitems
            };
        default:
            return state;

    }
};

export default rootReducers;
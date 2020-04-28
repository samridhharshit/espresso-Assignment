import React from 'react';
import './App.css';
import axios from 'axios';
import {connect} from "react-redux";

import CompanyInfo from "./Components/CompanyInfo";
import CustomerInfo from "./Components/CustomerInfo";
import SaleDescription from "./Components/SaleDescription";
import Summary from "./Components/Summary";
import TnC from "./Components/TnC";
import Print from "./Components/Print";

class App extends React.Component {
    componentDidMount() {
        axios.get('http://ec2-13-231-224-159.ap-northeast-1.compute.amazonaws.com:8080/api/invoice')
            .then(res => {
                this.props.mountCompany(res.data.data.company);
                this.props.mountCustomerDetails(res.data.data.client);
                this.props.mountOrder(res.data.data.order);
                this.props.mountOrderItems(res.data.data.order_items);
                // console.log(res.data);
            })
    }

    render() {
        return (
            <>
                <div className="App container-fluid">
                    <div className="row container-div company-info-row">
                        <CompanyInfo/>
                    </div>
                    <div className="row container-div customer-info-row">
                        <CustomerInfo/>
                    </div>
                    <div className="row container-div sale-description-row">
                        <SaleDescription/>
                    </div>
                    <div className="row container-div summary-row">
                        <Summary/>
                    </div>
                    <div className="row container-div tnc-row">
                        <TnC/>
                    </div>
                </div>
                <div className="row container-div print-row">
                    <Print/>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mountCompany: (company) => { dispatch({type: "mountCompany", company}) },
        mountCustomerDetails: (customer) => {dispatch({type: "mountCustomerDetails", customer})},
        mountOrder: (order) => {dispatch({type: "mountOrder", order})},
        mountOrderItems: (orderitems) => {dispatch({type: "mountOrderItems", orderitems})}
    }
};

export default connect(null, mapDispatchToProps)(App);

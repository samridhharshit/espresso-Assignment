import React from "react";
import {connect} from "react-redux";

class CustomerInfo extends React.Component {
    render() {
        const {customer, order} = this.props;
        // console.log(order);
        return (
            <>
                <div className="col-md-4 col-sm-12 customer-info">
                    <div className="heading"><strong>CLIENT INFORMATION</strong></div>
                    <br/>
                    <div><strong>{customer.name}</strong></div>
                    <div>{customer.address}</div>
                    <div>{customer.mobile}</div>
                    <div>{customer.email}</div>
                </div>
                <div className="col-md-4 col-sm-12 customer-info">
                    <div className="heading"><strong>ORDER INFORMATION</strong></div>
                    <br/>
                    <div className="row orders-row">
                        <div className="col-md-3 col-sm">Date:</div>
                        <div className="col-md-3 col-sm">{order.date}</div>
                        <div className="col"/>
                    </div>
                    <div className="row orders-row">
                        <div className="col-lg-3 col-md-4">Status:</div>
                        <div className="col-lg-3 col-md-4 status-color">{order.status}</div>
                        <div className="col"/>
                    </div>
                    <div className="row orders-row">
                        <div className="col-md-3 col-sm">Id:</div>
                        <div className="col-md-3 col-sm">#{order.id}</div>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 customer-info">
                    <div className="heading"><strong>INVOICE NUMBER: #{order.invoice_number}</strong></div>
                    <br/>
                    <div className="row blue">
                        <div className="col-md-3 col-sm">Total Dues:</div>
                        <div className="col-md-2 col-sm">{order.currency}{order.amount}</div>
                        <div className="col"/>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (State) => {
    return {
        customer: State.customer,
        order: State.order
    }
};

export default connect(mapStateToProps)(CustomerInfo);
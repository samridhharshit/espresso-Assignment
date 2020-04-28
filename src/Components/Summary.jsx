import React from "react";
import {connect} from "react-redux";

class Summary extends React.Component {
    render() {
        const {items} = this.props;
        let subTotal = 0, discount = 0, tax = 0, total = 0;
        for (let i in items) {
            subTotal += parseFloat(items[i].total);
        }
        tax = subTotal * 0.1;
        discount = subTotal * 0.05;
        total = subTotal + tax - discount;
        // console.log(subTotal);
        return (
            <div className="col-sm-12 summary">
                <br/>
                <div className="row summary-container">
                    <div className="col"/>
                    <div className="col-lg-2 col-md-3 col-sm-6">Sub Total:</div>
                    <div className="col-lg-2 col-md-3 col-sm-6">{subTotal}</div>
                </div>
                <div className="row summary-container">
                    <div className="col"/>
                    <div className="col-lg-2 col-md-3 col-sm-6">Taxes(10%):</div>
                    <div className="col-lg-2 col-md-3 col-sm-6">{tax}</div>
                </div>
                <div className="row summary-container">
                    <div className="col"/>
                    <div className="col-lg-2 col-md-3 col-sm-6">Discount(5%):</div>
                    <div className="col-lg-2 col-md-3 col-sm-6">{discount}</div>
                </div>
                <br/>
                <div className="row summary-container">
                    <div className="col"/>
                    <div className="col-lg-2 col-md-3 col-sm-6 blue">Total:</div>
                    <div className="col-lg-2 col-md-3 col-sm-6 blue">{total}</div>
                </div>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (State) => {
    return {
        items: State.orderItems
    }
};


export default  connect(mapStateToProps)(Summary);
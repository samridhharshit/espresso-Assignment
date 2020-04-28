import React from "react";
import {connect} from "react-redux";

class SaleDescription extends React.Component {
    render() {
        const {items} = this.props;
        // console.log(this.props.items[0]);
        if (items.length > 0) {
            for (let i in items) {
                items[i].id = i;
            }
            // console.log(items);
            return (
                <>
                    {
                        items.map(item =>
                            <div
                                key={item.id}
                                className="col-sm-12 headers">
                                <hr/>
                                <div className="row sales-description">
                                    <div className="col-md-6 col-sm-3 description">
                                        <div><strong>{item.name}</strong></div>
                                        <div>{item.description}</div>
                                    </div>
                                    <div className="col-md-2 col-sm-3">{item.quantity}</div>
                                    <div className="col-md-2 col-sm-3">{item.amount}</div>
                                    <div className="col-md-2 col-sm-3">{item.currency}{item.total}</div>
                                </div>
                            </div>
                        )
                    }
                </>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (State) => {
    return {
        items: State.orderItems
    }
};

export default connect(mapStateToProps)(SaleDescription);
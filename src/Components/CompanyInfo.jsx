import React from "react";
import {connect} from "react-redux";

class CompanyInfo extends React.Component {
    render() {
        const {company} = this.props;

        return (
            <>
                <div className="col-lg-3 col-md-4 col-sm-12 company-info">
                    <img src={company.logo} alt="espresso labs" />
                    <div>{company.name}</div>
                    <div>{company.address}</div>
                    <div>{company.email}</div>
                    <div>{company.mobile}</div>
                </div>
                <div className="col" />
            </>
        );
    }
}

const mapStateToProps = (State) => {
    return {
        company: State.company
    }
};

export default connect(mapStateToProps)(CompanyInfo);
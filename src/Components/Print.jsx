import React from "react";
import {Button} from "reactstrap";

export default class Print extends React.Component {
    render() {
        return (
            <div className="col-sm-12 print">
                <Button
                    color="primary"
                    value="print"
                    type="submit"
                >
                    Print
                </Button>
                <Button
                    color="secondary"
                    value="cancel"
                    type="submit"
                >
                    Cancel
                </Button>
            </div>
        );
    }
}
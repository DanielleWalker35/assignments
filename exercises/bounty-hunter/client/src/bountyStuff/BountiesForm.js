import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBounties, deleteBounty } from "../redux/reduxBounties";
import BountyList from "./BountyList";
import AddForm from "./AddForm";


class BountiesForm extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(props) {
        this.props.getBounties();
    }

    render(props) {
        const { data } = this.props;
        console.log(data);
        const bountiesList = data.map(bounty => <BountyList key={bounty._id} deleteBounty={this.props.deleteBounty} {...bounty} />);
        return (
            <div className="mainWrapper">
                <h1 className="header">Bounty Hunter</h1>
                {bountiesList}
                <h2>Add a Bounty:</h2>
                <AddForm />
            </div>
        )
    }

}
const mapStateToProps = state => {
    return state.bounties;
}
export default connect(mapStateToProps, { getBounties, deleteBounty})(BountiesForm);
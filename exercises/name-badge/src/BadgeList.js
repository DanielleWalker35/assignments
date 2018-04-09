import React from 'react';
import { connect } from "react-redux";
import OneBadge from "./OneBadge";

function BadgeList(props) {
    console.log(props);
    const badgeComponent = props.data.map((badge, i) => <OneBadge key={badge.firstName + i} {...badge} />)
    return (
        <div>
            {badgeComponent}
        </div>
    )
}

const mapStateToProps = state => {
    return state.badges;
}

export default connect(mapStateToProps, {})(BadgeList);
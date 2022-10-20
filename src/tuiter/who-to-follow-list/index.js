import React from "react";
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

    return(
        <ul className="list-group">
            {
                whoArray.map(who => {
                    return (<React.Fragment key={who.userName}>
                        <WhoToFollowListItem who={who}/>
                    </React.Fragment>); })
            }

        </ul>
    );
};

export default WhoToFollowList;


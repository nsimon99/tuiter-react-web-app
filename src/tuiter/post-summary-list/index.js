import React from "react";

import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post => {
                    return (<React.Fragment key={post.title}>
                        <PostSummaryItem post={post}/>
                    </React.Fragment>); })
                }

        </ul>
    );
};
export default PostSummaryList;




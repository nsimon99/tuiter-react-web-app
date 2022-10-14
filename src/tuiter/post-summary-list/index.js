import React from "react";
import postArray from "./posts.json";
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postArray.map(post => {
                    return (<React.Fragment key={post.title}>
                        <PostSummaryItem post={post}/>
                    </React.Fragment>); })
                }

        </ul>
    );
};
export default PostSummaryList;




import posts from "./posts.js";
import postSummaryItem from "./PostSummaryItem.js";


function PostSummaryList () {
    var result = "";
    for (let i = 0; i < posts.length; i++) {
        var html = postSummaryItem(posts[i]);
        result = result + html;
    }
    return result
}


export default PostSummaryList;


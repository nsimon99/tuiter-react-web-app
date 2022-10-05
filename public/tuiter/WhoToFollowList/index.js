import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "../WhoToFollowList/who.js";

function arr () {
    var result = "";
    for (let i = 0; i < who.length; i++) {
        var html = WhoToFollowListItem(who[i]);
        result = result + html;
    }
    return result
}

function WhoToFollowList () {

    return (`
           <ul class="list-group bg-dark">
           <li class="list-group-item bg-dark text-white">Who To Follow</li>
           ${arr()}
           </ul>
`);

}


export default WhoToFollowList;


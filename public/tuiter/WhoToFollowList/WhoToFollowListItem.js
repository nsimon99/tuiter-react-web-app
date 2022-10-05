

function WhoToFollowListItem (who) {
    return (  `<li class="list-group-item bg-dark text-white">

     <img class="wd-avatar-image rounded-circle float-start position-relative top-0 bg-dark" src= ${who.avatarIcon}/>
     
  <b> <div class="position-absolute  bg-transparent wd-text ">${who.userName}</div>
 
    </b><br>
    <div class="position-absolute  wd-handle-text bg-transparent  wd-text">${who.handle}</div>
     
    <div class="d-flex justify-content-end bg-dark">
        <button class="btn btn-primary rounded-pill">
            Follow
        </button>
    </div>

</li>`
    );

}


export default WhoToFollowListItem;
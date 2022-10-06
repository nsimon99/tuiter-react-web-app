
function PostSummaryItem (post) {

    return (`<li class= "list-group-item  bg-dark  ">

            <img src=${post.image} class="w-25  rounded float-end bg-dark"/>
            <div class="text-secondary bg-dark">${post.topic}</div>
          <div class="wd-parent bg-dark">
              <b><div class="wd-child bg-dark text-white fw-bold">${post.userName}</div></b>
              <div class="wd-child text-secondary bg-dark"> - ${post.time}</div>
          </div>
            <b><div class="bg-dark text-white fw-bold">${post.title}</div></b>
     
</li>`);
}

export default PostSummaryItem;
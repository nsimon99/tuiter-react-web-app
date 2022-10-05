const NavigationSidebar = () => {
    return(`
   <div class="list-group ">
     <a class="list-group-item bg-dark " >
       <i class="fab fa-twitter bg-dark" style="color: white"></i></a>
        <li class="list-group-item bg-dark text-white">
        <i class="fa fa-home bg-dark" style="color: white" aria-hidden="true"></i> Home
    </li>
    <li class="list-group-item  active ">
        <i class="fas fa-hashtag bg-primary" style="color: white" aria-hidden="true"></i>Explore</li>
    <li class="list-group-item bg-dark text-white">
        <i class="fa fa-list bg-dark"  style="color: white"aria-hidden="true"></i>
        Lists</li>
    <li class="list-group-item bg-dark text-white">
        <i class="fa fa-bell bg-dark" style="color: white" aria-hidden="true"></i>Notification</li>
    <li class="list-group-item bg-dark text-white">
        <i class="fa fa-envelope bg-dark" style="color: white" aria-hidden="true"></i>
        Messages</li>
    <li class="list-group-item  bg-dark text-white">
        <i class="fa fa-bookmark bg-dark" style="color: white" aria-hidden="true"></i>
        Bookmarks</li>
    <li class="list-group-item bg-dark text-white">
        <i class="fa fa-user bg-dark" style="color: white" aria-hidden="true"></i>
        Profile</li>
    <li class="list-group-item bg-dark text-white">
        <i class="fa fa-caret-down bg-dark" style="color: white" aria-hidden="true"></i>
        More</li>
</ul>
<button class="btn btn-primary mt-1 wd-w">
    Tuit
</button>
        </div>
  
 `);
}
export default NavigationSidebar;


import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(` <div class="input-group ">
            <input type="text" class="form-control border-start-0  rounded-pill position-relative" placeholder="     Search" aria-label="search"
                   aria-describedby="search">
            <span class="input-group-text bg-transparent border-end-0 rounded-pill position-absolute end-0 start-0 top-0 bottom-0 " ><i class="fa fa-search bg-transparent "></i></span>
            <i class="fa fa-cog position-absolute fa-2x wd-gear translate-middle top-50 bg-transparent"  style="color: blue" aria-hidden="true"></i>
        </div>

        <ul class="nav nav-tabs mt-1">
            <li class="nav-item ">
                <a class="nav-link  bg-primary text-white" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#" tabindex="-1">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#" tabindex="-1">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative">
        <img  class="w-100 " src="../../image/starship.webp"/>
        <h1 class=" fw-bold text-dark bg-transparent position-absolute bottom-0 start-0">SpaceX's Starship</h1>
        </div>
        <ul class="mt-1 list-group bg-dark">
          ${PostSummaryList()}
          </ul>
    `);
}
export default ExploreComponent;


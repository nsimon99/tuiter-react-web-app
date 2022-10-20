import React from "react";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="/#">Tuiter</a>
            <a className={`list-group-item
                    ${!active?'active':''}`}  href="/tuiter/#">
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}  href="/tuiter/explore">
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}  href="/#">
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}  href="/#">
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}  href="/#">
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}  href="/#">
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}  href="/#">
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}  href="/#">
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
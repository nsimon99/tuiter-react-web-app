function WhoToFollowListItem (who) {
    const result = `<li class="list-group-item">\n' +
        '                <img class="wd-avatar-image rounded-circle float-start position-relative"
         src=${who.avatarIcon()}/>\n' +
        '               <b> <div class="position-absolute wd-text">${who.userName()}</div></b>\n' +
        '                <div class="position-absolute wd-text wd-handle-text">${who.handle()}</div>\n' +
        '                <div class="d-flex justify-content-end">\n' +
        '                <button class="btn btn-primary rounded-pill">\n' +
        '                    Follow\n' +
        '                </button>\n' +
        '                </div>\n' +
        '\n' +
        '            </li>`;

}



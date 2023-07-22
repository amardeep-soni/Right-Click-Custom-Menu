window.addEventListener('contextmenu', rightFunction);

function rightFunction(e) {
    e.preventDefault();

    document.body.innerHTML = `<div id="container">
            <div id="previewCont" class="row">
                <div class="logo"><img src="icon/preview.png" alt=""></div>
                <div id="preview">Preview</div>
            </div>
            <div id="shareCont" class="row">
                <div class="logo"><img src="icon/share.png" alt=""></div>
                <div id="share">Share</div>
            </div>
            <div id="getLinkCont" class="row">
                <div class="logo"><img src="icon/link.png" alt=""></div>
                <div id="getLink">Get LInk</div>
            </div>
            <div id="renameCont" class="row">
                <div class="logo"><img src="icon/rename.png" alt=""></div>
                <div id="rename">Rename</div>
            </div>
            <div id="deleteCont" class="row">
                <div class="logo"><img src="icon/delete.png" alt=""></div>
                <div id="delete">Delete</div>
            </div>

            <div id="settingCont" class="row">
                <div class="logo"><img src="icon/setting.png" alt=""></div>
                <div id="setting">Setting</div>
            </div>
        </div>`;
    let containerEl = document.getElementById('container');

    // for width 
    let newWidth = window.innerWidth - e.clientX;
    // console.log(newWidth);
    if (newWidth <= 250) {
        containerEl.style.right = `${newWidth}px`
    }
    else {
        containerEl.style.left = `${e.clientX}px`;
    }

    // for height
    let newHeight = window.innerHeight - e.clientY;
    console.log(newHeight);
    if (newHeight <= 270) {
        containerEl.style.bottom = `${newHeight}px`
    }
    else {
        containerEl.style.top = `${e.clientY}px`;
    }
}

window.addEventListener('click', leftClicked)
function leftClicked() {
    document.body.innerHTML = ''
}
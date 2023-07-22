if (isTouchDevice()) {
    heading.innerText = 'Long Press to see Awesome Menu!'
} else {
    heading.innerText = 'Right Click To see Awesome Menu!'
}
let cont = document.getElementById('cont');
// Desktop right-click
window.addEventListener('contextmenu', rightFunction);

// Mobile long press
window.addEventListener('touchstart', touchStart);
window.addEventListener('touchend', touchEnd);

let timeoutId;

function rightFunction(e) {
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
}
function isTouchDevice() {
    let heading = document.getElementById('heading');
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}
function touchStart(e) {
    timeoutId = setTimeout(() => {
        showContextMenu(e.touches[0].clientX, e.touches[0].clientY);
    }, 500); // Adjust the delay according to your needs (in milliseconds)
}

function touchEnd() {
    clearTimeout(timeoutId);
}

function showContextMenu(x, y) {
    cont.innerHTML = `<div id="container">
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

    // Positioning the context menu
    let newWidth = window.innerWidth - x;
    if (newWidth <= containerEl.offsetWidth) {
        containerEl.style.right = `${newWidth}px`
    } else {
        containerEl.style.left = `${x}px`;
    }

    let newHeight = window.innerHeight - y;
    if (newHeight <= 250) {
        containerEl.style.bottom = `${newHeight}px`
    } else {
        containerEl.style.top = `${y}px`;
    }
}

// Close the context menu on any click (left click, touch, etc.)
window.addEventListener('click', function () {
    cont.innerHTML = '';
});

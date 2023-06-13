const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
})

let tabFocus = 0;

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    const keydownCode = e.keyCode;
    const tabElement =  e.target;
    // console.log("key code: ", keydownCode);

    // change the tabindex of the current tab to -1
    if (keydownCode === keydownLeft || keydownCode === keydownRight) {
        // console.log("key code: ", keydownCode);
        // console.log("tabElement: ", tabElement);
        tabElement.setAttribute("tabindex", -1);
        tabElement.setAttribute("aria-selected", false);

    }
    
    // if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    // if the left key is pushed, move to the next tab on the left
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length -1;
        }

    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
    // tabs[tabFocus].setAttribute("aria-selected", true);
}

function changeTabPanel(e) {
    const tabElement =  e.target;
    console.log("tabElement: ", tabElement);
    // tabFocus = tabElement.tabindex;
    console.log("tab panel changed. tabFocus: ", tabFocus);
}

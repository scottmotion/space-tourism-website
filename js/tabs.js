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

    if (keydownCode === keydownLeft || keydownCode === keydownRight) {
    // change the tabindex of the current tab to -1
        tabElement.setAttribute("tabindex", -1);

        if (e.keyCode === keydownRight) {
        // if the right key is pushed, move to the next tab on the right
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft) {
        // if the left key is pushed, move to the next tab on the left
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length -1;
            }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}

function changeTabPanel(e) {
    const targetTab =  e.target;

    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetPicture = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, targetPanel);

    hideContent(mainContainer, 'picture');
    showContent(mainContainer, targetPicture);

    tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
    })
    
    targetTab.setAttribute("aria-selected", true);

}

function hideContent(parent, content) {
    parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
    parent.querySelector([`#${content}`]).removeAttribute('hidden');
}
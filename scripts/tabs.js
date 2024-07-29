const tabsContainers = document.querySelectorAll('.Tabs_tabRoot');
const mobileMenus = document.querySelectorAll('.react-select-container-red');

function showContent(tabName) {
    const contents = document.querySelectorAll(`[data-tab="${tabName}"]`);
    contents.forEach((content) => {
        content.classList.add('_active');
        $(`.slider`).slick('setPosition')
        $(`.double-slider`).slick('setPosition')
        $(`.multi-slider`).slick('setPosition')
    })
}

function removeContent(currentTabName) {
    const currentContents = document.querySelectorAll(`[data-tab="${currentTabName}"]`);
    currentContents.forEach((currentContent) => {
        currentContent.classList.remove('_active');
    })
}

function setPlaceholder(container, tab) {
    const placeholder = container.querySelector('.Tabs_placeholder');
    if(placeholder) {
        placeholder.textContent = tab.textContent;
    }
}

function setActiveTab(tab) {
    tab.classList.add('Tabs_selected');
    const similarTabs = document.querySelectorAll(`[data-tab-btn="${tab.dataset.tabBtn}"]`);
    similarTabs.forEach((tab) => {
        tab.classList.add('Tabs_selected');
    })
}

function removeActiveTab(currentTab) {
    currentTab.classList.remove('Tabs_selected');
    const similarTabs = document.querySelectorAll(`[data-tab-btn="${currentTab.dataset.tabBtn}"]`);
    similarTabs.forEach((tab) => {
        tab.classList.remove('Tabs_selected');
    })
}

tabsContainers.forEach((container) => {
    const tabs = container.querySelectorAll('.Tabs_tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            let currentTab = container.querySelector('.Tabs_selected');
            removeActiveTab(currentTab);
            setActiveTab(tab);
            setPlaceholder(container, tab);
            removeContent(currentTab.dataset.tabBtn)
            showContent(tab.dataset.tabBtn);
        })
    })
})

mobileMenus.forEach((menu) => {
    const list = menu.querySelector('.react-select-red__menu');
    menu.addEventListener('click', () => {
        console.log(menu)
        list.classList.toggle('_active');
    })
})
const tabsContainers = document.querySelectorAll('.Tabs_tabRoot');

function showContent(currentTabName, tabName) {
    const currentContents = document.querySelectorAll(`[data-tab="${currentTabName}"]`);
    currentContents.forEach((currentContent) => {
        currentContent.classList.remove('_active');
        console.log(currentContent)
    })
    const contents = document.querySelectorAll(`[data-tab="${tabName}"]`);
    contents.forEach((content) => {
        content.classList.add('_active');
        $(`.slider`).slick('setPosition')
        $(`.double-slider`).slick('setPosition')
        $(`.multi-slider`).slick('setPosition')
    })
}

tabsContainers.forEach((container) => {
    let currentTab = container.querySelector('.Tabs_selected');
    const tabs = container.querySelectorAll('.Tabs_tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            currentTab.classList.remove('Tabs_selected');
            tab.classList.add('Tabs_selected');
            showContent(currentTab.dataset.tabBtn, tab.dataset.tabBtn);
            currentTab = tab;
        })
    })
})
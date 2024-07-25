const dialogBtn = document.querySelectorAll('.Dialog_dialogButton');

dialogBtn.forEach((btn) => {
    const dialogRoot = btn.parentElement;
    btn.addEventListener('click', () => {
        dialogRoot.classList.toggle('Dialog_closed');
        const svg = btn.firstElementChild;
        if(dialogRoot.classList.contains('Dialog_closed')) {
            svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 40 40" class="Generic_clrIcon"><path fill="var(--primary)" class="Generic_iconPath" d="M31.667 18.333h-10v-10a1.667 1.667 0 00-3.334 0v10h-10a1.666 1.666 0 100 3.334h10v10a1.667 1.667 0 003.334 0v-10h10a1.666 1.666 0 100-3.334z"></path></svg>'        
        } else {
            svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 40 40" class="Generic_clrIcon"><path fill="var(--primary)" class="Generic_iconPath" d="M31.667 21.667H8.333a1.666 1.666 0 110-3.334h23.334a1.666 1.666 0 110 3.334z"></path></svg>'
        }
    })
})
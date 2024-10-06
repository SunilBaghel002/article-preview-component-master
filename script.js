const shareBtn = document.querySelector(".shareBtn")
const shareItems = document.querySelector(".shareItems")
const icon = document.querySelector(".shareIcon")

shareItems.style.display = 'none'
shareBtn.addEventListener("click", () => {
    if (shareItems.style.display == 'flex') {
        shareItems.style.display = 'none'
        shareBtn.classList.remove("shareBtnActive")
        icon.classList.remove("shareIconActive")
    }
    else {
        shareItems.style.display = 'flex'
        shareBtn.classList.add("shareBtnActive")
        icon.classList.add("shareIconActive")
    }
})

document.addEventListener("click", (e) => {
    if (e.target !== icon && e.target !== shareBtn && e.target !== shareItems && shareItems.style.display == 'flex') {
        shareItems.style.display = 'none'
        shareBtn.classList.remove("shareBtnActive")
        icon.classList.remove("shareIconActive")
    }
});

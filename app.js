let tabBtns = document.getElementsByClassName("tabBtn");

function toggleTabs () {

    for(let i =0; i < tabBtns.length; i++)
    {
        tabBtns[i].classList.remove("active");
    }

    this.classList.add("active");
}

for(let i =0; i < tabBtns.length; i++)
{
    tabBtns[i].addEventListener("click", toggleTabs);
}

let dropdownBtn = document.querySelector("#dropdownBtn");
let deviceList = document.querySelector("#deviceList");
let applyFilter = document.querySelector("#applyFilter")
let deviceWrapper = document.querySelector(".device-wrapper")

dropdownBtn.addEventListener("click", () => {
    deviceList.classList.toggle("open");
    applyFilter.classList.toggle("open");
    deviceWrapper.classList.toggle("open");
})

let listItems = document.querySelectorAll("#deviceList li");
let deviceType = document.querySelector("#deviceType input")

for(let i = 0; i < listItems.length;  i++)
{
    listItems[i].addEventListener("click", e => {
        deviceType.value = e.target.innerText;
        applyFilter.style.visibility = "visible";
        applyFilter.style.opacity = "1";
    })
}
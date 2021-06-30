let mydata = document.querySelector("#input");
let btn = document.querySelector(".btn");
let p = document.querySelector("p");

let total = mydata.innerText;

chrome.storage.sync.set({'total': total});

btn.addEventListener('click',function(e){
    chrome.storage.sync.get('total',function(storedtotal){
        p.innerText = storedtotal.total;
    });
})


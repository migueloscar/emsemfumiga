document.getElementsByName("menu-select")[0].addEventListener("change",(a)=>{
    window.location.assign(window.location.protocol+"//"+window.location.hostname+a.srcElement.value);
});
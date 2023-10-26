function showSearch(){
    const searchBtn = document.querySelector('.search-container')
    const searchItem = document.querySelector('.fa-magnifying-glass')
    const xmarkBtn = document.querySelector('.fa-xmark-search')
    searchBtn.style.top = '130px'
    searchItem.style.display = 'none'
    xmarkBtn.style.display = 'block'
}
function showXmark(){
    const searchBtn = document.querySelector('.search-container')
    const searchItem = document.querySelector('.fa-magnifying-glass')
    const xmarkBtn = document.querySelector('.fa-xmark-search')
    searchBtn.style.top = '-100%'
    searchItem.style.display = 'block'
    xmarkBtn.style.display = 'none'
}
function showSubHead() {
    const subHead = document.querySelector('.sub-menu')
    subHead.style.height = '100vh'
}
function closeSubHead() {
    const ClosesubHead = document.querySelector('.sub-menu')
    ClosesubHead.style.height = '0'
}
function showSubSearch() {
    const subSearch = document.querySelector('.sub-search')
    subSearch.style.height = '100%'
}
function hideSubXmark() {
    const closeSubSearch = document.querySelector('.sub-search')
    closeSubSearch.style.height = '0'
}
function checknull(txt) {
    if (txt.value.length == 0) {
        return true;
    } else {
        return false;
    }
}

function checkpass(field) {
    if (!field.value.trim()) {
        return true; // Field is empty
    }
    return false; // Field is not empty
}

function validform(f) {
    if (checknull(f.firstname)) {
        alert(f.firstname.name + " must not be null");
        f.firstname.focus();
        return;
    }
    if (checknull(f.lastname)) {
        alert(f.lastname.name + " must not be null");
        f.lastname.focus();
        return;
    }
    if (checknull(f.eorp)) {
        alert(f.eorp.name + " must not be null");
        f.eorp.focus();
        return;
    }
    if (checknull(f.address)) {
        alert(f.address.name + " must not be null");
        f.address.focus();
        return;
    }
    if (checkpass(f.pass)) {
        alert(f.password.name + " must not be null");
        f.pass.focus();
        return;
    }
    if (checknull(f.date)) {
        alert("Date must be selected");
        f.date.focus();
        return false;
    }
    var genderSelect = f.gender;
    var selectedValue = genderSelect.options[genderSelect.selectedIndex].value;
    
    if (selectedValue === "SELECT YOUR GENDER") {
        alert("Please select your gender");
        return;
    }
    alert("Sign-up success!");
    return true;
}

function switchVisibility(){
    let input = document.getElementById("password");
    if(input.type == "password"){
        input.type = "text";
    }else {
        input.type = "password";
    }
}

function showEye() {
    const showEye = document.querySelector('.fa-eye')
    const closeEye = document.querySelector('.fa-eye-slash')
    closeEye.style.display='none'
    showEye.style.display='block'
}
function closeEye() {
    const showEye = document.querySelector('.fa-eye')
    const closeEye = document.querySelector('.fa-eye-slash')
    closeEye.style.display='block'
    showEye.style.display='none'
}




let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
// can xem lai
menu.onclick = () =>{
    // classList cho ban thao tac voi class
    // toggle: neu co class nay no se xoa con khong no se them vao
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    // classList cho ban thao tac voi class
    // toggle: neu co class nay no se xoa con khong no se them vao
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// su kien tim kiem nut thoat
document.querySelector('#search-icon').onclick = () =>{
    // chon search-icon them vao #search-form class 'active' dua ra mang hinh tim
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
//

// image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        setInterval(nextSlide,5000);
    }
    
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// 

const dssp = [
    {
        id:1,code:'50CRS / M / 3ATSB0434', name:'MLB - Modern short-sleeved',price:'$15',img:'https://product.hstatic.net/200000642007/product/50crs_3atsb0434_1_7979b4dd7db2447cbf2ddf26b2761493_2ea1ec6877d44a8595a61637e526a486_master.jpg'
    },
    {
        id:2,code:'50IVS / L / 3ATSV2143', name:'Varsity Number Overfit T-Shirt',price:'$32.05',img:'https://product.hstatic.net/200000642007/product/45whs_3atsv0334_1_8e710bf1abee476fa2ee29221f65e0b1_10899245614441278f0858fbddde2580_grande.jpg'
    },
    {
        id:3,code:'50CRS / L / 3ATSE0134', name:'MLB - round neck short sleeve t-shirt',price:'$45.37',img:'https://product.hstatic.net/200000642007/product/50crs_3atse0134_1_15b34f8ff5374dd487a7612ceda221b1_4cbcc193ef2847679d875138a8c456e1_master.jpg'
    },
    {
        id:4,code:'50CAV / F  / 3ABMS093N', name:'MLB - Varsity Canvas Rectangular Tote Bag',price:'$100',img:'https://product.hstatic.net/200000642007/product/50crd_3aorl103n_1_9afa054fbb2d46348d07b75c702ba791_74e87b1bef9744d6ad1ab6899d5512a5_master.jpg'
    },
    {
        id:5,code:'50CAV / F  / 3AORS083N', name:'MLB - Varsity Canvas Mini Rectangular',price:'$120',img:'https://product.hstatic.net/200000642007/product/07crd_3aors083n_1_c84eac5b650f4be79b9688c91d6efd66_02bbed11422b4c88a112eeaf40fea026_master.jpg'
    },
    {
        id:6,code:'50CAV / F  / 3ACRS034N', name:'MLB - Sportive MBowling Handbag',price:'$150',img:'https://product.hstatic.net/200000642007/product/07rbs_3abwm083n_1_edcd2980e6f443698682668c5cb8371b_64865c138c11412eaea05329083ba937_master.jpg'
    },       

]
function loadsp() {
    let kq = '';
    for(let i = 0; i < dssp.length; i++){
        kq += `<div class="box">
                <a href="#" class="fas fa-heart"></a>
                <a href="product_1.html" class="fas fa-eye"></a>
                <img src="${dssp[i].img}" alt="">
                <h3>${dssp[i].name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <span>${dssp[i].price}</span>
                <a href="card.html" class="btn" onclick="add('${dssp[i].name}','${dssp[i].code}','${dssp[i].price}',1,'${dssp[i].img}')"  target="_blank">add to cart</a>
                
            </div>`
    }
    document.getElementById('box-container-load').innerHTML = kq;
} 
// localStorage
// sessionStorage
var cart = [];
function add(product, code, price, quantity, img) {
    var prod = {
        product: product,
        code: code,
        price: price,
        quantity: quantity,
        img: img
    }

    let found = false;

    cart.forEach(item => {
        if (item.code === code) {
            item.quantity += quantity;
            found = true;
        }
    });

    if (!found) {
        cart.push(prod);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}



//
// order
const yourname = document.getElementById('your-name');
const yournumber = document.getElementById('your-number');
const productname = document.getElementById('product-name');
const youremail = document.getElementById('your-email');
const quality = document.getElementById('quality');
const datetime = document.getElementById('date-time');
const youraddress = document.getElementById('your-address');
const yourmessage = document.getElementById('your-message');

function sendform(){
    var isValid = true;

    if(yourname.value === ''){
        document.getElementById('errYourname').innerText = 'Your name should not be left blank';
        yourname.focus();
        yourname.style.backgroundColor = '#27ae60';
        yourname.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }else{
        yourname.style.backgroundColor = '#f0f0f0';
    }

    if(yournumber.value === ''){
        document.getElementById('errYournumber').innerText = 'Your number should not be left empty';
        yournumber.focus();
        yournumber.style.backgroundColor = '#27ae60';
        yournumber.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }else if(isNaN(yournumber.value)){
        document.getElementById('errYournumber').innerText = 'Your number must be a number';
        yournumber.focus();
        yournumber.style.backgroundColor = '#27ae60';
        yournumber.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }
    else{
        yournumber.style.backgroundColor = '#f0f0f0';
    }

    if(productname.value === ''){
        document.getElementById('errProductname').innerText = 'Product name should not be empty';
        productname.focus();
        productname.style.backgroundColor = '#27ae60';
        productname.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }else{
        productname.style.backgroundColor = '#f0f0f0';
    }

    if(youremail.value === ''){
        document.getElementById('errYouremail').innerText = 'Your email address should not be empty.';
        youremail.focus();
        youremail.style.backgroundColor = '#27ae60';
        youremail.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }else{
        youremail.style.backgroundColor = '#f0f0f0';
    }

    if(quality.value === ''){
        document.getElementById('errQuality').innerText = 'how much order must not be empty';
        quality.focus();
        quality.style.backgroundColor = '#27ae60';
        quality.style.setProperty('--placeholder-color', 'white');
        isValid = false;
    }else{
        quality.style.backgroundColor = '#f0f0f0';
    }

    // if(datetime.value === ''){
    //     document.getElementById('errDatetime').innerText = 'date and time cannot be left blank';
    //     datetime.focus();
    //     datetime.style.backgroundColor = '#27ae60';
    //     datetime.style.setProperty('--placeholder-color', 'white');
    //     isValid = false;
    // }else{
    //     datetime.style.backgroundColor = '#f0f0f0';
    // }

    // if(youraddress.value === ''){
    //     document.getElementById('errYouraddress').innerText = 'your address must not be empty';
    //     youraddress.focus();
    //     youraddress.style.backgroundColor = '#27ae60';
    //     youraddress.style.setProperty('--placeholder-color', 'white');
    //     isValid = false;
    // }else{
    //     youraddress.style.backgroundColor = '#f0f0f0';
    // }

    // if(yourmessage.value === ''){
    //     document.getElementById('errYourmessage').innerText = 'your message must not be empty';
    //     yourmessage.focus();
    //     yourmessage.style.backgroundColor = '#27ae60';
    //     yourmessage.style.setProperty('--placeholder-color', 'white');
    //     isValid = false;
    // }else{
    //     yourmessage.style.backgroundColor = '#f0f0f0';
    // }



    return isValid;
}

const remail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
if(youremail){
    // blur di chuyen con tro ra khoi truong email
    youremail.addEventListener('blur',function(){
        if(!youremail.value){
            document.getElementById('errYouremail').innerText = 'Your email address should not be empty.';
            youremail.focus();
            youremail.style.backgroundColor = '#27ae60';
            youremail.style.setProperty('--placeholder-color', 'white');
        }else if(!remail.test(youremail.value)){
            document.getElementById('errYouremail').innerText = 'Your email is not in the correct format';
            youremail.focus();
            youremail.style.backgroundColor = '#27ae60';
            youremail.style.setProperty('--placeholder-color', 'white');
        }else{
            youremail.style.backgroundColor = '#f0f0f0';
        }
    });
}

// your message
if(yourmessage){
    yourmessage.addEventListener('blur',function(){
        const textValue = yourmessage.value.trim();
        // dem so tu trong doan van
        // filter(boolean) loc ra cac phan tu khong phai chuoi rong 
        const wordCount = textValue.split(/\s+/).filter(Boolean).length;
         if(!yourmessage.value){
             document.getElementById('errYourmessage').innerText = 'your message must not be empty';
             yourmessage.focus();
             yourmessage.style.backgroundColor = '#27ae60';
             yourmessage.style.setProperty('--placeholder-color', 'white');
         }
        else if(wordCount > 30){
            document.getElementById('errYourmessage').innerText = 'your message should not exceed 30 words.';
            yourmessage.focus();
            yourmessage.style.backgroundColor = '#27ae60';
            yourmessage.style.setProperty('--placeholder-color', 'white');
        }else{
            document.getElementById('errYourmessage').innerText = '';
            yourmessage.style.backgroundColor = '#f0f0f0';
        }
    })
} 

function hide(){
    document.getElementById('errYourname').innerText = '';
    document.getElementById('errYournumber').innerText = '';
    document.getElementById('errProductname').innerText = '';
    document.getElementById('errYouremail').innerText = '';
    document.getElementById('errQuality').innerText = '';
    //document.getElementById('errDatetime').innerText = '';
    //document.getElementById('errYouraddress').innerText = '';
    //document.getElementById('errYourmessage').innerText = '';



    yourname.style.backgroundColor = '#f0f0f0';
    yournumber.style.backgroundColor = '#f0f0f0';
    productname.style.backgroundColor = '#f0f0f0';
    youremail.style.backgroundColor = '#f0f0f0';
    quality.style.backgroundColor = '#f0f0f0';
    //datetime.style.backgroundColor = 'f0f0f0';
    //youraddress.style.backgroundColor = 'f0f0f0';
    //yourmessage.style.backgroundColor = 'f0f0f0';




    yourname.style.setProperty('--placeholder-color', '#192a56');
    yournumber.style.setProperty('--placeholder-color', '#192a56');
    productname.style.setProperty('--placeholder-color', '#192a56');
    youremail.style.setProperty('--placeholder-color', '#192a56');
    quality.style.setProperty('--placeholder-color', '#192a56');
    //datetime.style.setProperty('--placeholder-color', '#192a56');
    //youraddress.style.setProperty('--placeholder-color', '#192a56');
    //yourmessage.style.setProperty('--placeholder-color', '#192a56');
}
const username = document.getElementById('usermame').value;
const password = document.getElementById('password').value;
const errusername = document.getElementById('errUsername');
const errpassword = document.getElementById('errPassword');
function sendform1() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errUsername = document.getElementById("errUsername");
    var errPassword = document.getElementById("errPassword");

    errUsername.textContent = '';
    errPassword.textContent = '';

    var isTr = true;

    if (username.trim() === '') {
        errUsername.textContent = 'Username cannot be empty';
        isTr = false;
    } else if (username.length < 5) {
        errUsername.textContent = 'Username must be at least 5 characters long';
        isTr = false;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(username)) {
        errUsername.textContent = 'Username can only contain letters, numbers, and spaces';
        isTr = false;
    }

    if (password.trim() === "") {
        errPassword.textContent = 'Password cannot be empty';
        isTr = false;
    } else if (password.length < 6) {
        errPassword.textContent = 'Password must be at least 6 characters long';
        isTr = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
        errPassword.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        isTr = false;
    }

    return isTr;
}
function hide1(){
    document.getElementById('errUsername').innerText = '';
    document.getElementById('errPassword').innerText = '';}




    

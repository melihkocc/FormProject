const form = document.getElementById("form")
const alertKısım = document.querySelector(".alertKısım")
const password = document.querySelector("#sifre")
const repassword = document.querySelector("#sifreTekrar")


form.addEventListener("submit",submitForm)

let isValid = false;
let passwordMatch = false;


function validateForm(){
matchPassword();

    isValid = form.checkValidity();
    console.log(isValid);
    
        const user={
            name : form.ad.value,
            lastName : form.soyad.value,
            email : form.email.value,
            tel : form.tel.value,
            adres : form.address.value,
        }
        if(!isValid){
            alertKısım.style.borderColor = "red"
            alertKısım.style.color="red"
            alertKısım.textContent = "Lütfen Tüm Alanları Eksiksiz Doldurunuz!"
        }
        if(isValid&&passwordMatch){
            alertKısım.style.borderColor = "green"
            alertKısım.textContent = "Kayıt Olundu"
            alertKısım.style.color = "green"
            console.log(`
                Ad : ${user.name}
                Soyad : ${user.lastName}
                Email : ${user.email}
                Tel : ${user.tel}
                Address : ${user.adres}
    
            `)
    
        }
        else if(!passwordMatch){
            alertKısım.textContent="Şifreler Uyuşmuyor"
            alertKısım.style.borderColor = "red"
            alertKısım.style.color="red"
        }

}

function matchPassword(){
    if(password.value==repassword.value){
        passwordMatch=true
    }else{
        passwordMatch=false;
    }
}


function submitForm(e){
    e.preventDefault();
    validateForm();
}
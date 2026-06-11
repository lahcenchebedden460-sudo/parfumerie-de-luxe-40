// ===============================
// PARFUMERIE DE LUXE 40
// ===============================

// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.25)";

    }else{

        navbar.style.boxShadow = "none";

    }

});


// Smooth Scroll

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});


// Product Animation

const products =
document.querySelectorAll(".product");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.2
});

products.forEach(product => {

    product.style.opacity = "0";
    product.style.transform =
    "translateY(50px)";
    product.style.transition =
    "all .8s ease";

    observer.observe(product);

});


// Category Animation

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// Newsletter Form

const form =
document.querySelector(".newsletter form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email =
        form.querySelector("input").value;

        if(email === ""){

            alert("Veuillez saisir votre email");

            return;
        }

        alert(
        "Merci pour votre inscription !"
        );

        form.reset();

    });

}


// Hero Text Animation

window.addEventListener("load",()=>{

    const heroTitle =
    document.querySelector(".hero h2");

    const heroText =
    document.querySelector(".hero p");

    const heroBtn =
    document.querySelector(".hero .btn");

    heroTitle.style.opacity = "0";
    heroText.style.opacity = "0";
    heroBtn.style.opacity = "0";

    heroTitle.style.transform =
    "translateY(40px)";

    heroText.style.transform =
    "translateY(40px)";

    heroBtn.style.transform =
    "translateY(40px)";

    heroTitle.style.transition =
    "all 1s ease";

    heroText.style.transition =
    "all 1.2s ease";

    heroBtn.style.transition =
    "all 1.4s ease";

    setTimeout(()=>{

        heroTitle.style.opacity = "1";
        heroTitle.style.transform =
        "translateY(0)";

    },200);

    setTimeout(()=>{

        heroText.style.opacity = "1";
        heroText.style.transform =
        "translateY(0)";

    },500);

    setTimeout(()=>{

        heroBtn.style.opacity = "1";
        heroBtn.style.transform =
        "translateY(0)";

    },800);

});


// Counter Cart Example

let cartCount = 0;

const bagIcon =
document.querySelector(".fa-shopping-bag");

if(bagIcon){

    bagIcon.addEventListener("click",()=>{

        cartCount++;

        bagIcon.setAttribute(
        "data-count",
        cartCount
        );

        console.log(
        "Produits dans le panier :",
        cartCount
        );

    });

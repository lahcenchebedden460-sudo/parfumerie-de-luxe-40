// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
    });
});

// ==========================
// Header Shadow On Scroll
// ==========================

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    }else{
        header.style.boxShadow = "none";
    }

});

// ==========================
// Product Hover Animation
// ==========================

const products = document.querySelectorAll('.product');

products.forEach(product => {

    product.addEventListener('mouseenter', () => {
        product.style.transform = "translateY(-10px)";
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = "translateY(0)";
    });

});

// ==========================
// Category Animation
// ==========================

const categories = document.querySelectorAll('.category-card');

categories.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "translateY(0)";
    });

});

// ==========================
// Newsletter Validation
// ==========================

const form = document.querySelector('.newsletter form');

if(form){

    form.addEventListener('submit', function(e){

        e.preventDefault();

        const email =
        document.querySelector('.newsletter input');

        if(email.value.trim() === ""){

            alert("Veuillez entrer votre email");

            return;
        }

        const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regex.test(email.value)){

            alert("Adresse email invalide");

            return;
        }

        alert("Merci pour votre inscription !");

        email.value = "";

    });

}

// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

const animatedElements = document.querySelectorAll(
'.feature, .category-card, .product, .offer-left, .offer-right'
);

animatedElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// ==========================
// WhatsApp Button Effect
// ==========================

const whatsapp =
document.querySelector('.whatsapp');

if(whatsapp){

    setInterval(() => {

        whatsapp.animate([
            {transform:'scale(1)'},
            {transform:'scale(1.15)'},
            {transform:'scale(1)'}
        ],{
            duration:1000
        });

    },3000);

}

// ==========================
// Hero Button Effect
// ==========================

const heroBtn =
document.querySelector('.btn');

if(heroBtn){

    heroBtn.addEventListener('mouseenter', () => {

        heroBtn.style.transform = "scale(1.05)";

    });

    heroBtn.addEventListener('mouseleave', () => {

        heroBtn.style.transform = "scale(1)";

    });

}

// ==========================
// Current Year Footer
// ==========================

const footer =
document.querySelector('.footer-bottom p');

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Parfumerie De Luxe 40 - Tous droits réservés.`;

}

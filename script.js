const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        // Kisi aur item ko band karne ke liye (Optional)
        // accordionItems.forEach(i => i.classList.remove('active'));
        
        item.classList.toggle('active');
    });
});
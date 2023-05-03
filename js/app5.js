const titleMain = document.querySelectorAll('h2');

const obeserver = new IntersectionObserver((entries) => {
    for (const entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    }
}, {threshold: 0.5, rootMargin: '10%' })

titleMain.forEach(el => obeserver.observe(el));
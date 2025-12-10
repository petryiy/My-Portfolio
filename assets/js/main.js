document.addEventListener('DOMContentLoaded', () => {
    // 获取所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in-up');

    // 简单的 IntersectionObserver (现代浏览器支持极好)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // 当元素出现10%时触发
    });

    animatedElements.forEach(el => observer.observe(el));

    // 延迟一点点让首屏文字更优雅地出现
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        if(hero) hero.classList.add('visible');
    }, 100);
});
// 加载头部和页脚组件
function loadComponents() {
    // 加载头部
    fetch('components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initNavigation();
        })
        .catch(error => console.error('Error loading header:', error));

    // 加载页脚
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 初始化导航功能
function initNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
            }
        });
    }
    
    // Responsive nav adjustment
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav ul');
        if (window.innerWidth > 992) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // 设置当前页面激活状态
    setActiveNavLink();
}

// 设置导航链接激活状态
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
});
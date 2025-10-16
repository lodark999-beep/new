// 通用功能函数

// WhatsApp功能
function openWhatsApp() {
    const phoneNumber = "+8613537885828";
    const message = "Hello LODARK, I'm interested in your automotive entertainment systems. Could you please provide more information?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// 微信复制功能
function copyWeChat() {
    const wechatId = "+86 13537885828";
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(wechatId).then(() => {
            alert(`WeChat ID "${wechatId}" has been copied to clipboard. Please add us on WeChat.`);
        }).catch(err => {
            console.error('Failed to copy WeChat ID: ', err);
            alert(`Please manually copy the WeChat ID: ${wechatId}`);
        });
    } else {
        // 备用方法
        const textArea = document.createElement("textarea");
        textArea.value = wechatId;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert(`WeChat ID "${wechatId}" has been copied to clipboard. Please add us on WeChat.`);
        } catch (err) {
            console.error('Failed to copy WeChat ID: ', err);
            alert(`Please manually copy the WeChat ID: ${wechatId}`);
        }
        document.body.removeChild(textArea);
    }
}

// 邮件功能
function sendEmail() {
    const email = "lodark999@gmail.com";
    const subject = "Inquiry about LODARK Automotive Entertainment Systems";
    const body = "Dear LODARK Team,\n\nI am interested in your automotive entertainment systems. Could you please provide more information about your products and pricing?\n\nThank you.";
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURL;
}

// 返回顶部功能
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 平滑滚动锚点链接
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化所有通用功能
function initCommonFunctions() {
    initBackToTop();
    initSmoothScrolling();
}

// 页面加载完成后初始化通用功能
document.addEventListener('DOMContentLoaded', function() {
    // 等待组件加载完成
    setTimeout(initCommonFunctions, 100);
});// JavaScript Document
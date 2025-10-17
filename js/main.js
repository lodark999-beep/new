/* 产品分类选项卡样式 */
.series-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.series-tab {
    padding: 15px 20px;
    margin: 0 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    font-weight: 600;
}

.series-tab i {
    margin-right: 8px;
}

.series-tab.active {
    color: white;
}

.series-tab.e-series {
    background-color: #f8f9fa;
    color: #6c757d;
    border: 1px solid #dee2e6;
}

.series-tab.e-series.active {
    background-color: #6c757d;
    border-color: #6c757d;
}

.series-tab.s-series {
    background-color: #e3f2fd;
    color: #0d6efd;
    border: 1px solid #bbdefb;
}

.series-tab.s-series.active {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.series-tab.p-series {
    background-color: #f3e5f5;
    color: #6f42c1;
    border: 1px solid #e1bee7;
}

.series-tab.p-series.active {
    background-color: #6f42c1;
    border-color: #6f42c1;
}

.series-tab.specialty {
    background-color: #fff3cd;
    color: #ffc107;
    border: 1px solid #ffecb5;
}

.series-tab.specialty.active {
    background-color: #ffc107;
    border-color: #ffc107;
}

.series-tab.addons {
    background-color: #d1e7dd;
    color: #198754;
    border: 1px solid #badbcc;
}

.series-tab.addons.active {
    background-color: #198754;
    border-color: #198754;
}

/* 产品网格样式 */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.product-card {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    color: white;
}

.product-badge {
    background-color: #6c757d;
}

.product-card[data-series="s-series"] .product-badge {
    background-color: #0d6efd;
}

.product-card[data-series="p-series"] .product-badge {
    background-color: #6f42c1;
}

.product-card[data-series="specialty"] .product-badge {
    background-color: #ffc107;
    color: #212529;
}

.product-card[data-series="addons"] .product-badge {
    background-color: #198754;
}

.product-image {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
}

.product-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-info {
    padding: 20px;
}

.product-model {
    font-size: 18px;
    margin-bottom: 15px;
    color: #212529;
}

.product-specs {
    margin-bottom: 15px;
}

.product-specs span {
    display: block;
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 5px;
}

.product-price {
    font-size: 20px;
    font-weight: 700;
    color: #0d6efd;
    margin-bottom: 15px;
}

.product-actions .btn {
    width: 100%;
    text-align: center;
}

/* 隐藏非活动系列的产品 */
.products-grid .product-card {
    display: block;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .series-tabs {
        flex-direction: column;
        align-items: stretch;
    }
    
    .series-tab {
        margin: 0 0 10px 0;
        text-align: center;
        justify-content: center;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
}
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单功能
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // 产品筛选功能
    const seriesTabs = document.querySelectorAll('.series-tab');
    const filters = document.querySelectorAll('.filter-group select');
    
    if (seriesTabs.length > 0) {
        seriesTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const series = this.getAttribute('data-series');
                
                // 更新活动标签
                seriesTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // 筛选产品
                filterProductsBySeries(series);
            });
        });
    }
    
    // 筛选功能
    if (filters.length > 0) {
        filters.forEach(filter => {
            filter.addEventListener('change', applyAllFilters);
        });
    }
    
    // FAQ功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
            });
        });
    }
    
    // 表单提交功能
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});

// 按系列筛选产品
function filterProductsBySeries(series) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardSeries = card.getAttribute('data-series');
        
        if (series === 'all' || cardSeries === series) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 应用所有筛选条件
function applyAllFilters() {
    const seriesFilter = document.querySelector('.series-tab.active')?.getAttribute('data-series') || 'all';
    const sizeFilter = document.getElementById('size-filter')?.value || 'all';
    const ramFilter = document.getElementById('ram-filter')?.value || 'all';
    const storageFilter = document.getElementById('storage-filter')?.value || 'all';
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const series = card.getAttribute('data-series');
        const size = card.getAttribute('data-size');
        const ram = card.getAttribute('data-ram');
        const storage = card.getAttribute('data-storage');
        
        const seriesMatch = seriesFilter === 'all' || series === seriesFilter;
        const sizeMatch = sizeFilter === 'all' || size === sizeFilter;
        const ramMatch = ramFilter === 'all' || ram === ramFilter;
        const storageMatch = storageFilter === 'all' || storage === storageFilter;
        
        if (seriesMatch && sizeMatch && ramMatch && storageMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
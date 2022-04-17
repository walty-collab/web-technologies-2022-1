export default class Catalog {
    constructor(el) {
        this.el = el
        this.itemsEl = el.querySelector('[data-catalog-items]')
        this.paginationEl = el.querySelector('[data-catalog-pagination]')
        this.item = this.getPost();
        this.page = this.getPage()
        this.limit = 12
        this.count = null
        this.pageCount = null

        this.getItems()
        this.initListeners()
        this.getItem()        
        }

        
    initListeners() {
        this.paginationEl.addEventListener('click', event => {
            if (!event.target.hasAttribute('data-pagination-item')) {
                return
            }

            const page = +event.target.dataset.paginationItem

                      
            if (!page || (page === this.page)) {
                return;
            }

            
            this.page = page
            this.getItems()
            console.log(page);
            const {origin, pathname} = document.location
            const url = origin + pathname + `?page=${page}`

            history.pushState({}, '', url)
        })
    }

    getPage() {
        const url = new URL(window.location.href)

        return +url.searchParams.get('page') || 1
    }

    getPageCount() {
        this.pageCount = Math.floor(this.count / this.limit)
    }

    getItems() {
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`

        fetch(url)
        .then(res => {
            this.count = res.headers.get('x-total-count')
            this.getPageCount()
            return res.json()
        })
        .then(data => {
            this.renderItems(data)
            this.renderPagination()
        })
    }

    renderItems(items) {
        let html = ''

        items.forEach(item => {
            html += `
            <div class="post-item">
                <h3 class="post-item__title">
                    ${item.title}
                </h3>

                <div class="post-item__body">
                    ${item.body}
                </div>

                <a class="post-item__link" href="/post.html?id=${item.id}">
                    Открыть
                </a>
            </div>
            `
        })

        this.itemsEl.innerHTML = html
    }

    renderItem(item) {
        this.itemsEl.innerHTML = `            
            <h3 class="post-content__title">${item.title}</h3>
            
            <div class="post-content__body">
                ${item.body}
            </div>
            
            <a class="post-content__back" href="http://localhost:63342/web-technologies-2022-1/
            posts.html?_ijt=3064i2uinus7j19n2nmfvt1epv&_ij_reload=RELOAD_ON_SAVE">Назад</a> 
        `
    }

    async getItem() {
        const url = `https://jsonplaceholder.typicode.com/posts/${this.item}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data)
                this.renderItem(data);
        } catch(error) {
            console.error('Ошибка:',error)}
    }
    
    getPost() {
        const url = new URL(window.location.href)
        return +url.searchParams.get('post')
    }    

    renderPagination() {
        let html = '';

        for (let i = 0; i < this.pageCount; i++) {
            const activeClass = this.page === i + 1 ? 'post-pagination-item_active' : ''

            html += `
            <button class="post-pagination-item ${activeClass}" data-pagination-item="${i + 1}">
                ${i + 1}
            </button>
            `
        }

        this.paginationEl.innerHTML = html
    }
}

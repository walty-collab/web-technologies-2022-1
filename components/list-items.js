export default class ListItems {
    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();
        this.init();
    }

    init () {
        const parents = this.el.querySelectorAll('[data-parent]');

        if (parents.length !== 0) {
            parents.forEach( parent => {
                const open = parent.querySelector('[data-open]');

                open.addEventListener('click', () => this.toggleItems(parent));
            } )
        }
    }

    render() {
        this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data));
    }

    renderParent(data) {
        if(data.hasChildren){
            let dataRow="<div class=\"list-item \" data-parent>\n" +
                "<div class=\"list-item__inner\">\n" +
                "<img class=\"list-item__arrow\" src=\"./assets/img/chevron-down.png\" alt=\"chevron-down\" data-open>\n" +
                "<img class=\"list-item__folder\" src=\"./assets/img/folder.png\" alt=\"folder\">\n" +
                "<span>"+data.name+"</span>\n" +
                "</div>\n" +
                "<div class=\"list-item__items\">"

            data.items.forEach(childrenElement=>{
                dataRow+=this.renderParent(childrenElement);
            })

            return dataRow+"</div> </div>"
        }

        else return "<div class=\"list-item__inner\">\n" +
            "<img class=\"list-item__folder\" src=\"./assets/img/folder.png\" alt=\"folder\">\n" +
            "<span>"+data.name+"</span>\n" +
            "</div>"
    }

    toggleItems(parent) {
        parent.classList.toggle('list-item_open');
    }
}
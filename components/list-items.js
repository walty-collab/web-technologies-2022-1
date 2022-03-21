export default class ListItems {
  constructor(el, data) {
    this.el = el;
    this.data = data;
  }

  init() {
    const parents = this.el.querySelectorAll('[data-parent]')
    
    parents.forEach(parent => {
      const open = parent.querySelector('[data-open]')
      
      open.addEventListener('click', () => this.toggleItems(parent) )
    })
  }
  
  render() {
    //this.el.insertAdjacentElement('beforeend', this.renderParent(this.data))
    this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data));
  }
  
  renderParent(data) 
  {
    let itemName = ''

    data.items.forEach(el =>{
      if (el.hasChildren) itemName += this.renderParent(el)
      else itemName += this.renderChildren(el)
    })

    return `
             <div class="list-item list-item_open" data-parent>
                 <div class="list-item__inner">
                          <img class="list-item__arrow"
                               src="./assets/img/chevron-down.png"
                               alt="" data-open>
              
                          <img class="list-item__folder"
                               src="./assets/img/folder.png"
                               alt="">
              
                          <span class="list-item__text">
                              ${data.name}
                          </span>
                 </div>
              
                      <div class="list-item__items">
                          <div class="list-item">
                              ${itemName}
                          </div>
                      </div> 
            </div>`
  }
  
  renderChildren(data) 
  {
    return `<div class="list-item">
                         <div class="list-item__inner">
                             <img class="list-item__folder"
                                  src="./assets/img/folder.png"
                                  alt="">
                                  
                              <span class="list-item__text">
                                 ${data.name}
                             </span>
                         </div>
                     </div>`    
  }
  
  toggleItems(parent) {
    parent.classList.toggle('list-item_open')
  }
}
import {renderListWithTemplate} from './utils.mjs';

function productCardTemplate(product) {
    return `
      <li class="product-card">
        <a href="product_pages/?products=${product.Id}">
            <img src="${product.Image}" alt="${product.Name}">
            <h2 class="${producBrand.Name}"></h2>
            <h3 class="${product.Name}"></h3>
            <p class=product-card__price">$${product.FinalPrice}</p>
        </a>
      </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    // next, render the list - TODO
    this.renderList(list);
  }
};

function renderList(list) {
    // const htmlStrings = list.map(productCardTemplate);
    // this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));

    // use a new utility function instead of the commented code above
    renderListWithTemplate(productCardTemplate, this.listElement, list);
}
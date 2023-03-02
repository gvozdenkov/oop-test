export class Section {
  #container;
  #renderer;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#container = document.querySelector(containerSelector);
  }

  addItems(items) {
    this.#renderer(items);
  }

  addItem(item, mode = 'prepend') {
    mode === 'prepend' ? this.#container.prepend(item) : this.#container.append(item);
  }
}

export class Section {
  #data;
  #container;
  #renderer;

  constructor({ data, renderer }, containerSelector) {
    (this.#data = data), (this.#renderer = renderer);
    this.#container = document.querySelector(containerSelector);
  }

  clear() {
    this.#container.innerHTML = '';
  }

  addItems() {
    this.#renderer(this.#data);
  }

  addItem(item, mode = 'append') {
    mode === 'append' ? this.#container.append(item) : this.#container.prepend(item);
  }
}

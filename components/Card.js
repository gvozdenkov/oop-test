export class Card {
  #cardTemplate;
  #handleAddToCart;
  #handleImageClick;

  #listEl;
  #addButton;
  #imageEl;

  constructor(cardTemplate, { handleAddToCart, handleImageClick }) {
    this.#cardTemplate = cardTemplate;
    this.#handleAddToCart = handleAddToCart;
    this.#handleImageClick = handleImageClick;
  }

  _getElement() {
    return document.querySelector(this.#cardTemplate).content.children[0].cloneNode(true);
  }

  _setEventListeners() {
    this.#listEl = this._getElement();
    console.log(this.#listEl);

    this.#addButton = this.#listEl.querySelector('.card__add-btn');
    this.#imageEl = this.#listEl.querySelector('.card__image');

    this.#addButton.addEventListener('click', () => {
      this.#handleAddToCart();
    });
    this.#imageEl.addEventListener('click', () => {
      this.#handleImageClick;
    });
  }
}

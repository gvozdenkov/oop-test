export class Card {
  #cardTemplate;
  #image;
  #title;
  #desctiption;
  #price;
  #handleAddToCart;
  #handleImageClick;

  #listEl;
  #imageEl;
  #titleEl;
  #descriptionEl;
  #priceEl;
  #addButton;

  constructor(cardTemplate, cardData, { handleAddToCart = () => {}, handleImageClick = () => {} }) {
    this.#cardTemplate = cardTemplate;
    this.#image = cardData.image;
    this.#title = cardData.title;
    this.#desctiption = cardData.description;
    this.#price = cardData.price;
    this.#handleAddToCart = handleAddToCart;
    this.#handleImageClick = handleImageClick;

    this.#listEl = this.#getElement();
    this.#imageEl = this.#listEl.querySelector('.card__image');
    this.#titleEl = this.#listEl.querySelector('.card__title');
    this.#descriptionEl = this.#listEl.querySelector('.card__description');
    this.#priceEl = this.#listEl.querySelector('.card__price');
    this.#addButton = this.#listEl.querySelector('.card__add-btn');
  }

  #getElement() {
    return document.querySelector(this.#cardTemplate).content.children[0].cloneNode(true);
  }

  generate() {
    this.#imageEl.src = this.#image;
    this.#imageEl.alt = `${this.#title}.`;
    this.#titleEl.textContent = this.#title;
    this.#descriptionEl.textContent = this.#desctiption;
    this.#priceEl.textContent = `$${this.#price}`;

    this.#setEventListeners();

    return this.#listEl;
  }

  #setEventListeners() {
    this.#addButton.addEventListener('click', () => this.#handleAddToCart(this));
    this.#imageEl.addEventListener('click', () => this.#handleImageClick(this));
  }
}

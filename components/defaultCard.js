import { Card } from './Card.js';

export class defaultCard extends Card {
  #image;
  #title;
  #desctiption;
  #price;

  #listEl;
  #imageEl;
  #titleEl;
  #descriptionEl;
  #priceEl;

  constructor(cardTemplate, card, { handleAddToCart, handleImageClick }) {
    super(cardTemplate, { handleAddToCart, handleImageClick });

    this.#image = card.image;
    this.#title = card.title;
    this.#desctiption = card.descriptionShort;
    this.#price = card.price;
  }

  generate() {
    this.#listEl = super._getElement();
    super._setEventListeners();
    console.log(super._setEventListeners());
    this.#imageEl = this.#listEl.querySelector('.card__image');
    this.#titleEl = this.#listEl.querySelector('.card__title');
    this.#descriptionEl = this.#listEl.querySelector('.card__description');
    this.#priceEl = this.#listEl.querySelector('.card__price');

    this.#imageEl.src = this.#image;
    this.#imageEl.alt = `${this.#title}.`;
    this.#titleEl.textContent = this.#title;
    this.#descriptionEl.textContent = this.#desctiption;
    this.#priceEl.textContent = `$${this.#price}`;

    return this.#listEl;
  }
}

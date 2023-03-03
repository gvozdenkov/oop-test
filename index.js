import { defaultCard } from './components/defaultCard.js';
import { horizontalCard } from './components/horizontalCard.js';
import { Section } from './components/Section.js';
import {
  cardsContainerEl,
  cardsContainerSelector,
  gridButtonEl,
  gridCardTemplateSelector,
  listButtonEl,
  listCardTemplateSelector,
  productListHorizontalClass,
} from './utils/constants.js';
import { products } from './utils/data.js';

const defaultCardList = new Section(
  {
    data: products,
    renderer: (cards) => {
      defaultCardList.clear();
      cardsContainerEl.classList.remove(productListHorizontalClass);
      cards.forEach((card) => {
        defaultCardList.addItem(createDefaultCardEl(card));
      });
    },
  },
  cardsContainerSelector
);

const horizontalCardList = new Section(
  {
    data: products,
    renderer: (cards) => {
      horizontalCardList.clear();
      cardsContainerEl.classList.add(productListHorizontalClass);
      cards.forEach((card) => {
        horizontalCardList.addItem(createHorizontalCardEl(card));
      });
    },
  },
  cardsContainerSelector
);

function createDefaultCardEl(cardData) {
  const card = new defaultCard(gridCardTemplateSelector, cardData, {
    handleAddToCart: (card) => {
      console.log('add to cart');
    },
    handleImageClick: (card) => {
      console.log('image click');
    },
  });

  return card.generate();
}

function createHorizontalCardEl(cardData) {
  const card = new horizontalCard(listCardTemplateSelector, cardData, {
    handleAddToCart: (card) => {
      console.log('add to cart');
    },
    handleImageClick: (card) => {
      console.log('image click');
    },
  });

  return card.generate();
}

gridButtonEl.addEventListener('click', () => defaultCardList.addItems());
listButtonEl.addEventListener('click', () => horizontalCardList.addItems());

defaultCardList.addItems();

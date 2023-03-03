import { Card } from './components/Card.js';
import { Section } from './components/Section.js';
import {
  cardsContainerSelector,
  gridCardTemplateSelector,
  listCardTemplateSelector,
  products,
} from './utils/constants.js';

const cardList = new Section(
  {
    renderer: (cards) => {
      cards.reverse().forEach((card) => cardList.addItem(createCardEl(card)));
    },
  },
  cardsContainerSelector
);

function createCardEl(cardData) {
  const card = new Card(gridCardTemplateSelector, cardData, {
    handleAddToCart: () => {
      console.log('add to cart');
    },
    handleImageClick: () => {
      console.log('image click');
    },
  });

  return card.generate();
}

cardList.addItems(products);

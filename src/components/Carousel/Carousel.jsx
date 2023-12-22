import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";

const cards = [
  { id: 1, idx: 1, imgSrc: "/dairy.jpg", title: "Dairy" },
  { id: 2, idx: 2, imgSrc: "/utensils.jpg", title: "Utensils" },
  { id: 3, idx: 3, imgSrc: "/pots.webp", title: "Flower Pots" },
  { id: 4, idx: 4, imgSrc: "/planners.webp", title: "Office Planners" },
  { id: 5, idx: 5, imgSrc: "/garden.jpg", title: "Gardening Equipments" },
];

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [displayCards, setDisplayCards] = useState(cards);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (cards.length < 7) {
      let c = [...cards];
      for (let i = cards.length; i < 7; i++) {
        c.push({ ...cards[i % cards.length], id: i + 1 });
      }
      setDisplayCards(c);
      updateActiveItem(c.filter((ele) => ele.id == 4)[0].idx);

      return () => {};
    }
    setDisplayCards(cards.slice(0, 7));
    updateActiveItem(4);
    return () => {};
  }, []);

  const updateActiveItem = (index) => {
    setActiveItem(index);
  };
  const handleArrowClick = (direction) => {
    const childcards = cardsRef.current.children;

    for (let i = 0; i < childcards.length; i++) {
      childcards[i].classList.add(styles.transition);
    }

    if (direction === "left") {
      for (let i = 0; i < childcards.length; i++) {
        childcards[i].classList.add(styles.transition_left);
      }
    }

    if (direction === "right") {
      for (let i = 0; i < childcards.length; i++) {
        childcards[i].classList.add(styles.transition_right);
      }
    }

    setTimeout(() => {
      if (direction === "left") {
        let firstIndex = parseInt(childcards[0].id);
        firstIndex = firstIndex - 1 < 1 ? cards.length : firstIndex - 1;
        console.log(firstIndex);

        let newCards = [
          cards.filter((ele) => ele.idx == firstIndex)[0],
          ...displayCards.slice(0, displayCards.length - 1),
        ];
        newCards = newCards.map((ele, index) => ({ ...ele, id: index + 1 }));

        setDisplayCards(newCards);
        updateActiveItem(displayCards.filter((ele) => ele.id == 3)[0].idx);
        for (let i = 0; i < childcards.length; i++) {
          childcards[i].classList.remove(styles.transition_left);
        }
      }
      if (direction === "right") {
        let lastIndex = parseInt(childcards[childcards.length - 1].id);
        lastIndex = lastIndex + 1 > cards.length ? 1 : lastIndex + 1;

        let newCards = [
          ...displayCards.slice(1, displayCards.length),
          cards.filter((ele) => ele.idx == lastIndex)[0],
        ];
        newCards = newCards.map((ele, index) => ({ ...ele, id: index + 1 }));

        setDisplayCards(newCards);

        updateActiveItem(displayCards.filter((ele) => ele.id == 5)[0].idx);

        for (let i = 0; i < childcards.length; i++) {
          childcards[i].classList.remove(styles.transition_right);
        }
      }
      for (let i = 0; i < childcards.length; i++) {
        childcards[i].classList.remove(styles.transition);
      }
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleArrowClick("right");
    }, 4000);

    return () => clearInterval(intervalId);
  }, [activeItem]);

  return (
    <div className={styles.container}>
      <div className={styles.cards} ref={cardsRef}>
        {displayCards.map((card) => (
          <div key={card.id} className={styles.card} id={`${card.idx}`}>
            <img src={`/carousel/${card.imgSrc}`} alt={`Card ${card.id + 1}`} />
            <div className={styles.title}>{card.title}</div>
          </div>
        ))}
      </div>

      <div className={styles.carousel_nav}>
        <button onClick={() => handleArrowClick("left")}>←</button>
        {cards.map((_, index) => (
          <div
            key={index}
            className={activeItem === index + 1 ? styles.active : ""}
          ></div>
        ))}
        <button onClick={() => handleArrowClick("right")}>→</button>
      </div>
    </div>
  );
};

export default Carousel;

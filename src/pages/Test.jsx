import React, { useState } from "react";
import {
  Slider,
  Button,
  BookContainer,
  Book,
  AddButton,
} from "../styles/styledTest";

const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
];

const Test = () => {
  const [current, setCurrent] = useState(0);

  const nextBook = () => {
    setCurrent((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrent((prev) => (prev - 1 + books.length) % books.length);
  };

  const showButtons = books.length > 1;

  return (
    <Slider>
      <Button onClick={prevBook} show={showButtons}>
        Left
      </Button>
      <BookContainer>
        {books.map((book, index) => {
          let large = index === current;
          let small =
            (index === (current + 1) % books.length &&
              current !== books.length - 1) ||
            (index === (current - 1 + books.length) % books.length &&
              current !== 0);
          let next =
            index === (current + 1) % books.length &&
            current !== books.length - 1;
          let prev =
            index === (current - 1 + books.length) % books.length &&
            current !== 0;
          let hidden = !(large || small);

          // 책이 하나만 있을 때는 큰 책으로 중앙에 위치
          if (books.length === 1) {
            large = true;
            small = false;
            next = false;
            prev = false;
            hidden = false;
          }

          return (
            <Book
              key={book.id}
              large={large}
              small={small}
              next={next}
              prev={prev}
              hidden={hidden}
            >
              {book.title}
              <AddButton>+</AddButton>
            </Book>
          );
        })}
      </BookContainer>
      <Button onClick={nextBook} show={showButtons}>
        Right
      </Button>
    </Slider>
  );
};

export default Test;

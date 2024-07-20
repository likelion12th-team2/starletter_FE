import React, { useState } from "react";
import PropTypes from "prop-types";
import { BookContainer, Page, PageContent } from "../styles/styledTest";

const Test = () => {
  const contents = [
    {
      id: 1,
      content: "쪼꼬야 이모도 쪼고 보고싶어",
    },
    {
      id: 2,
      content: "쪼꼬도 우리 보고있을거라고 생각해",
    },
    {
      id: 3,
      content: "언니는 쪼꼬 절대 못잊을거야! 쪼꼬도 우리 잊지마",
    },
    {
      id: 4,
      content: "우리는 항상 너를 기억할 거야.",
    },
    {
      id: 5,
      content: "너는 항상 우리 마음 속에 있을 거야.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < contents.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <BookContainer>
      <Page onClick={handlePrevPage} disabled={currentPage === 0}>
        <PageContent>
          {currentPage > 0 && contents[currentPage - 1].content}
        </PageContent>
      </Page>
      <Page
        onClick={handleNextPage}
        disabled={currentPage === contents.length - 1}
      >
        <PageContent>{contents[currentPage].content}</PageContent>
      </Page>
    </BookContainer>
  );
};

Test.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.node),
};

Test.defaultProps = {
  pages: [],
};

export default Test;

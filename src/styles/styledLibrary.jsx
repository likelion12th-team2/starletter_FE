import { styled } from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 120px;
  background: #002951;
  color: #002951;
`;

export const Logo = styled.div`
  cursor: pointer;
  margin-left: 80px;

  #logo {
    margin-top: -20px;
    width: 140px;
    height: 48px;
  }
`;

export const NavContent = styled.div`
  width: 100vw;
  margin-left: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 60px;
  margin-top: 20px;

  #bar {
    color: #fff;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const MovingContent = styled.div`
  justify-content: flex-end;
  float: right;
  display: flex;
  flex-direction: row;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 60px;

  #library {
    cursor: pointer;
  }

  #bookroom {
    cursor: pointer;
    color: #efd26a;
  }

  #comparison {
    cursor: pointer;
  }

  #market {
    cursor: pointer;
  }
`;

export const Account = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  gap: 60px;
  line-height: normal;
  margin-right: 63px;

  #login {
    cursor: pointer;
  }

  #join {
    cursor: pointer;
  }

  #mypage {
    cursor: pointer;
  }

  #logout {
    cursor: pointer;
  }
`;

// body
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #002951;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const LibContainer = styled.div`
  background: #002951;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const SearchWrap = styled.div`
  margin-bottom: 220px;
  position: relative;
  margin-top: 90px;
`;
export const Search = styled.div`
  // position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 40px;

  width: 1077px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--gray-10, #ebeaea);

  #searchImg {
    width: 41.443px;
    height: 40.25px;
    flex-shrink: 0;
    margin-left: 38.74px;
  }
  #search {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    width: 100%;
    margin-right: 38.74px;

    border: none;
    background: var(--gray-10, #ebeaea);
    outline: none;
  }
`;

export const SearchPlus = styled.div`
  z-index: 1;

  width: 1077px;
  height: 344px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;

  padding-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;
export const RecentTitle = styled.div`
  margin-bottom: 7px;
  margin-right: auto;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const RecentList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 38px;

  .recent-search {
    display: flex;
    padding: 5px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 20px;
    background: var(--gray-10, #ebeaea);

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const RecommendTitle = styled.div`
  margin-bottom: 7px;
  margin-right: auto;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const RecommendList = styled.div`
  display: flex;
  gap: 10px;

  .keyword {
    width: 66px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #c4def8;
    border: none;

    color: var(--Color-1, #002951);
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

//검색어 입력 전 메인
export const LibMain = styled.div``;

export const SMTitle = styled.div``;
export const SM = styled.div`
  margin-bottom: 177px;
`;
export const SMBooks = styled.div`
  display: flex;
  justify-contents: center;

  display: flex;
  gap: 45px;
  width: 1105px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;

  margin-bottom: 15px;

  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.45px;
`;
export const Heart = styled.div``;
export const HeartWrap = styled.div`
  display: flex;
  gap: 45px;
  width: 1105px;
  flex-wrap: wrap;
`;

export const Book = styled.div`
  position: relative;
`;
export const BookCover = styled.div`
  width: 184.866px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 13.353px;
  background: #87a8cf;

  position: relative;

  display: flex;
  flex-direction: column;
`;
export const BookCoverText = styled.div`
  #title {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 7.663px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    writing-mode: vertical-rl;

    background: #fff;
    padding-top: 5.57px;
    padding-right: 5.74px;
    padding-left: 20.21px;
    padding-bottom: 20px;

    position: absolute;
    top: 1px;
    left: 70%;
    border-radius: 0px 0px 9.28px 9.28px;
    box-shadow: 0px 7.424px 7.424px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const BookCoverImg = styled.div`
  margin-top: 54.12px;

  #MycoverImg {
    width: 184.866px;
    height: 169.061px;
    flex-shrink: 0;
    object-fit: cover;
  }
`;
export const BookTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 184.866px;

  // 제목 길면 생략
  white-space: nowrap; /* 텍스트를 한 줄로 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분을 ...으로 표시 */
  }
`;

export const BookWriter = styled.div`
  color: var(--gray-30, #c2c1c1);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Recent = styled.div`
  margin-top: 100px;
  margin-bottom: 135px;
`;
export const RecentWrap = styled.div`
  display: flex;
  gap: 45px;
  width: 1105px;
  flex-wrap: wrap;
`;
export const NoResults = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

//검색 결과
//export const
// footer
export const Footer = styled.div`
  bottom: 0;
  height: 222px;
  background: #37506e;
  flex-shrink: 0;
`;

export const Introduction = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #introduce {
    margin-top: 30px;
  }

  #logo {
    margin-top: 5px;
    width: 51px;
    height: 15px;
  }

  #team {
    margin-top: 20px;
  }

  #name {
    margin-top: 7px;
  }

  #sns {
    margin-top: 7px;
  }
`;

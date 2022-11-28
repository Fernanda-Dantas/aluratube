import styled from "styled-components";

export const StyledFavoritos = styled.div`
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundLevel1};
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      /* width: calc(100vw - 16px * 4); */
      display: grid;
      /* grid-gap: 10px; */
      grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

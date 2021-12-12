import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  .intro {
    margin-top: 2rem;
    z-index: 10;

    &-title,
    &-subtitle {
      font-size: 300%;
      font-weight: 900;
      line-height: 1.3;
    }

    &-description {
      position: relative;
      top: -120px;
      font-size: 130%;
      font-size: 400;
      line-height: 1.5;
      max-width: 700px;
      color: var(--light-text);
    }

    &-bubble {
      position: relative;
      top: -120px;
      left: 450px;
      width: 300px;
      height: 300px;
      z-index: 1;

      @media (max-width: 768px) {
        top: -80px;
        left: 200px;
      }

      @media (max-width: 480px) {
        top: -60px;
        left: 60px;
      }

      @media (max-width: 320px) {
        top: -60px;
        left: 0px;
      }
    }

    &-btn {
      position: relative;
      display: flex;
      align-items: center;
      top: -60px;
      font-size: 120%;
      font-size: 700;
      padding: 1rem 2rem;
      border-radius: 40px;
      outline: none;
      border: none;
      color: #fff;
      cursor: pointer;
      background-color: var(--blue);
    }
  }

  .posts {
    display: grid;
    grid-gap: 3rem 3rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    margin-bottom: 2rem;
  }
`;

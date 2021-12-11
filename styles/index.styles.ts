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
      top: -60px;
      font-size: 120%;
      font-size: 700;
      padding: 1.25rem 3rem;
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

    &-post {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 1rem;
      border-radius: 20px;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

      &-header {
        display: flex;
        justify-content: center;

        img {
          border-radius: 20px;
        }
      }

      &-body {
        position: relative;

        &-info {
          display: flex;
          margin-top: 0.75rem;
          font-size: 90%;
          font-weight: 300;
          color: var(--light-text);
        }

        &-title {
          margin-top: 1rem;
          font-size: 120%;
          font-weight: 700;
          color: #000;
        }

        &-description {
          text-align: justify;
          font-size: 100%;
          font-weight: 400;
          margin-top: 1rem;
          color: var(--light-text);
        }
      }
    }
  }
`;

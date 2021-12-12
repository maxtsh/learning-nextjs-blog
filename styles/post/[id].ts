import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  .header {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-date {
      display: flex;
      align-items: center;
      font-size: 110%;
      font-weight: 400;
      color: var(--light-text);
    }

    &-title {
      margin: 1rem 0rem;
      font-size: 300%;
      font-weight: 900;
      line-height: 1.3;
      color: #000;
    }
  }

  .body {
    &-image {
      position: relative;
      width: 100%;
      height: 400px;

      &-tag {
      }
    }

    &-description {
      margin: 1rem 0rem;
      font-size: 130%;
      font-size: 400;
      line-height: 1.5;
      color: var(--light-text);
    }
  }
`;

import styled from "styled-components";

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  .header {
    display: flex;
    justify-content: center;
    cursor: pointer;

    img {
      border-radius: 20px;
    }
  }

  .body {
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
`;

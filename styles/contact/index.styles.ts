import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .form {
    flex: 1;
    max-width: 800px;

    .title {
      font-size: 200%;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    &-group {
      display: flex;
      justify-content: space-between;

      &-control {
        display: flex;
        flex-direction: column;
        flex: 1;

        &:first-child {
          margin-right: 1rem;
        }

        .label {
          margin-bottom: 0.25rem;
        }

        .input {
          font-size: 110%;
          font-weight: 400;
          outline: none;
          border: 1px solid #666;
          padding: 0.5rem;
          border-radius: 8px;

          &::placeholder {
            font-size: 80%;
          }
        }
      }
    }

    &-text {
      margin-top: 1rem;
      padding: 0.5rem;
      width: 100%;
      border-radius: 8px;
      outline: none;
      border: 1px solid #666;
    }
  }
`;

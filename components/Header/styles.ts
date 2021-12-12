import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid rgb(215, 216, 219);

  .header {
    padding: 0rem 1rem;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .avatar {
      flex: 0.25;

      &-img {
        border-radius: 50%;
      }
    }

    .navigation {
      display: flex;
      flex: 0.5;

      &-list {
        flex: 1;
        list-style: none;
        display: flex;
        justify-content: space-between;

        &-item {
          display: flex;
          align-items: center;
          cursor: pointer;

          &-icon {
            margin-right: 0.25rem;
          }

          a {
            font-size: 110%;
            font-weight: 500;
            color: #000;
            text-decoration: none;
          }
        }
      }
    }

    .contact {
      display: flex;
      justify-content: flex-end;
      flex: 0.25;

      &-btn {
        border-radius: 2rem;
        padding: 0.75rem 2rem;
        background-color: #fff;
        border: 2px solid #666;
        outline: none;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 580px) {
    .header {
      .avatar {
        &-img {
        }
      }
      .navigation {
        &-list {
          &-item {
            a {
              font-size: 100%;
              font-weight: 400;
            }
          }
        }
      }
      .contact {
        &-btn {
          padding: 0.25rem 1rem;
        }
      }
    }
  }
`;

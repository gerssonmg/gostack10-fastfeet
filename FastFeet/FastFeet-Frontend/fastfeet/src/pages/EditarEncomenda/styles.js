import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageOptions = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  min-height: 100px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  justify-content: flex-start;

  padding: 20px;
  height: 400px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    ul {
      display: flex;
      flex-direction: column;

      li {
        display: flex;

        justify-content: flex-start;
        margin-bottom: 20px;

        div {
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 20px;
        }
      }
    }
    p {
      text-align: left;
    }

    input {
      background: rgba(0, 0, 0, 0);
      border: 1;

      border-radius: 4px;
      height: 44px;
      padding: 0 15px;

      margin: 0 0 10px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;

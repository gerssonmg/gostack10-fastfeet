import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { darken } from 'polished';

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
  justify-content: space-between;

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

    nav {
      display: flex;
      justify-items: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 3px dotted #aaa;

      color: #999999;

      p {
        font-size: 16px;
      }
      /* svg {
        width: 40px;
        height: 40px;
        color: #dddddd 0% 0% no-repeat padding-box;
        opacity: 1;
      }*/

      svg {
        width: 40px;
        height: 40px;
        color: #999999;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      text-align: left;
    }

    input {
      background: rgba(0, 0, 0, 0);
      border: 1;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

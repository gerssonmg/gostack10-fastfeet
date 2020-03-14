import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-spacing: 0 10px;

  thead th {
    color: #000;

    text-align: center;
    padding: 1px;
  }
  tbody {
    margin-top: 50px;

    tr {
      background: #fff;
      td {
        padding: 15px;
        text-align: center;
      }
    }
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

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 460px;
  padding: 5px 15px;
`;

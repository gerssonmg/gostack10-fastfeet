import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const NotificationList = styled.div`
  z-index: 1000;
  position: absolute;
  padding-right: 30px;
  left: calc(50% - 75px);
  top: calc(100% + 30px);

  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: solid 1px;

  display: ${props => (props.visible ? 'block' : 'none')};

  font-size: 16px;
  ul {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px;
    li {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 5px;
      margin-right: 10px;
      border-bottom: solid 1px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(25, 25, 25, 1);
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  background-color: 'green';
  svg {
    color: 'red';
  }
`;

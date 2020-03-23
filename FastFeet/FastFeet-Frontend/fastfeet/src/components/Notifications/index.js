import React, { useState } from 'react';
import { MdEdit, MdViewList, MdDelete } from 'react-icons/md';
import { FaGenderless } from 'react-icons/fa';
import { Container, Badge, NotificationList } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  // function clickA() { }
  // function clickB() { }
  // function clickC() { }
  const hasUnread = true;

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <FaGenderless />
        <FaGenderless />
        <FaGenderless />
      </Badge>

      <NotificationList visible={visible}>
        <ul>
          <li>
            <MdViewList color="#7159c1" />
            Visualizar
          </li>
          <li>
            <MdEdit color="blue" />
            Editar
          </li>
          <li>
            <MdDelete color="red" />
            Excluir
          </li>
        </ul>
      </NotificationList>
    </Container>
  );
}

import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PropTypes from 'prop-types';

import Button from '../../common/Button';
import './styles/DeleteCardPopover.css';

const DeleteCardPopover = ({ card, authToken, deleteCard, isOpen, toggle }) => {
  return (
    <Popover placement="bottom" target="Popover1" isOpen={isOpen} toggle={toggle}>
      <PopoverHeader>Are you sure you want to delete this card ?</PopoverHeader>
      <PopoverBody>
        <Button
          classes="btn btn-danger delete-card"
          title="Delete"
          id="Popover1"
          onClick={() => deleteCard(card.id, card.listId, authToken)}
        />
      </PopoverBody>
    </Popover>
  );
};

DeleteCardPopover.propTypes = {
  authToken: PropTypes.string,
  card: PropTypes.object,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  deleteCard: PropTypes.func
};

export default DeleteCardPopover;
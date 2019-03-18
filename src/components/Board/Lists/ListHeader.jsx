import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import PropTypes from 'prop-types';

import EditListForm from './EditListForm';
import './styles/ListHeader.css';

class ListHeader extends Component {
  state = { showPopover: false, editListClicked: false };

  toggleClick = () => {
    this.setState({ editListClicked: !this.state.editListClicked });
  };

  togglePopover = () => {
    this.setState({ showPopover: !this.state.showPopover });
  };

  renderPopover = () => {
    const { listId, authToken, deleteList } = this.props;
    return (
      <Popover
        placement="bottom"
        isOpen={this.state.showPopover}
        target={`PopoverList${listId}`}
        toggle={this.togglePopover}
        className="list-popover"
      >
        <PopoverBody>
          <div className="toolbar-item" onClick={() => deleteList(listId, authToken)}>
            <div>Delete list...</div>
            <img className="pull-right" src={require('../../../images/delete.png')} alt="" />
          </div>
        </PopoverBody>
      </Popover>
    );
  };

  render() {
    const { dragHandleProps, title, listId } = this.props;
    return (
      <header {...dragHandleProps}>
        <div className="header-title">
          {this.state.editListClicked ? (
            <EditListForm
              value="title"
              form={`EditListForm-${listId}`}
              listId={listId}
              initialValues={{ title }}
              onEdit={this.toggleClick}
            />
          ) : (
            <h6 id="list-title" onClick={this.toggleClick}>
              {title}
            </h6>
          )}
        </div>
        <div className="header-toolbar" id={`PopoverList${listId}`} onClick={this.togglePopover}>
          <img src={require('../../../images/toolbar.png')} alt="" />
        </div>
        {this.renderPopover()}
      </header>
    );
  }
}

ListHeader.propTypes = {
  title: PropTypes.string,
  listId: PropTypes.string,
  authToken: PropTypes.string,
  dragHandleProps: PropTypes.object,
  deleteList: PropTypes.func
};

export default ListHeader;

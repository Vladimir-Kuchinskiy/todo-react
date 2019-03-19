import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardsDisplayer from '../common/BoardsDisplayer';
import Spinner from '../common/Spinner';

class Boards extends Component {
  componentDidMount() {
    const { authToken, getBoards } = this.props;
    getBoards(authToken);
  }

  render() {
    const { boards, loading } = this.props;
    return loading ? (
      <Spinner style={{ marginLeft: '36%' }} />
    ) : (
      <div className="row">
        <div className="col-9">
          <BoardsDisplayer title="Your boards" boards={boards} isCreator={true} />
        </div>
      </div>
    );
  }
}

Boards.propTypes = {
  authToken: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  boards: PropTypes.array.isRequired,
  getBoards: PropTypes.func.isRequired
};

export default Boards;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { editCard } from '../../actions/boardActions';

class EditCardForm extends Component {
  componentDidMount() {
    const { cardId, listId } = this.props;
    document.getElementById(`card-${cardId}-${listId}`).focus();
  }

  onSubmit = values => {
    const { editCard, cardId, onEdit } = this.props;
    if (values.content === '') throw new SubmissionError({ content: 'Can not be blank' });
    editCard(values, cardId);
    onEdit();
  };

  renderInputField = field => {
    const { cardId, listId } = this.props;
    return (
      <input
        type="text"
        id={`card-${cardId}-${listId}`}
        className="form-control"
        {...field.input}
      />
    );
  };

  render() {
    const { handleSubmit, onEdit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="content" component={this.renderInputField} onBlur={onEdit} />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm(
  (_state, { cardId, listId }) => ({
    form: `EditCardForm-${cardId}-${listId}`
  }),
  { editCard }
)(
  connect(
    null,
    { editCard }
  )(EditCardForm)
);

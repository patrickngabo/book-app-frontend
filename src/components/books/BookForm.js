/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TextInput from '../header/TextInput';

export default class BookForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <TextInput
          name="title"
          label="Title"
          className='form-control'
          value={this.props.title}
          onChange={this.props.onChange}
          placeholder="Title..."
        />

        <TextInput
          name="description"
          label="Description"
          className='form-control'
          value={this.props.description}
          onChange={this.props.onChange}
          placeholder="Description..."
        />
        <TextInput
          name="price"
          label="Price"
          className='form-control'
          value={this.props.price}
          onChange={this.props.onChange}
          placeholder="Price..."
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    );
  }
}

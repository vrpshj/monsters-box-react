import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './search-box.css';
export class SearchBox extends Component {
  render() {
    return <div> <TextField id="search-field" className='searchField' color='primary' label={this.props.label} placeholder={this.props.placeholder} variant="outlined" onChange={this.props.handleChange} /></div>;
  }
}

export default SearchBox;

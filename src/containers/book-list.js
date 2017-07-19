import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook }from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {

renderList(){
    return this.props.books.map((book, i) => {
        return (
              <li 
              key={i} 
              onClick={() => this.props.selectBook(book)}
              className="list-group">
              {book.title}
              </li>
            )
        })
    }

  render() {
    return (
      <div>
        <ul className="list-group-item">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

function  mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
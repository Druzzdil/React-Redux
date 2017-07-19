import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook }from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {

renderList(){
    return this.props.books.map((book, i) => {
        return (
            <ul key={i} className="list-group">{book.title}</ul>
            )
        })
    }

  render() {
    return (
      <div>
        <li className="list-group-item">{this.renderList()}</li>
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
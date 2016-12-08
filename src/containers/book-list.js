import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item"
					>{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//anything returned will show up as propr inside of BookList
function mapStateToProps(state){
	return{
		books: state.books
	};
}

//anything returned from this function will end up as props on BookList container
function mapDispactToProps(dispatch){
	//Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Promote Booklist from component to a container - it needs to know about this new dispatch method,
//selectBOok. Make it available as a prop
export default connect(mapStateToProps, mapDispactToProps)(BookList);
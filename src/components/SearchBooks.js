import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

class SearchBooks extends Component {

    render() {
        console.log(this.props)
        return (
            <div style={{ textAlign: 'center' }}>
                <SearchForm />
                <SearchResults results={this.props.results}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({ results: [state.results]})

export default connect(mapStateToProps)(SearchBooks);

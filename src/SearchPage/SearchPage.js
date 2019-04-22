import React from 'react';
import { connect } from "react-redux";
import { searchActions } from '../_actions';
import { SearchResults } from './SearchResults';

class SearchPage extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(searchActions.search());
    // }
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            searching: false,
            results: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { keyword } = e.target;
        this.setState({ keyword });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const { keyword, results } = this.state;
        const { dispatch } = this.props;
        
        dispatch(searchActions.search());
    }
    render() {
        const { keyword, searching, results } = this.props;
        return (
            <div className="container">
                <div className="search-container">
                    <div className="search-box">
                        <form className="form-inline" name="seasrchForm" onSubmit={this.handleSubmit}>
                            <div className="formGroup">
                                <input className="form-control" type="text" name="keyword" value={keyword} placeholder="Keyword" onChange={this.handleChange} />
                            </div>
                            <div className="formGroup">                        
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    { searching && <em>Loading...</em>}
                    <SearchResults data={results}></SearchResults>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { searching, results } = state.search;
    console.log('state', state)
    return {
        searching,
        results
    };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage }; 
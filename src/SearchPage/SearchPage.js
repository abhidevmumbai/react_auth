import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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
        const keyword = e.target.value;
        this.setState({ keyword });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { keyword } = this.state;
        const { dispatch } = this.props;
        
        if(keyword) {
            dispatch(searchActions.search(keyword));
        }
    }
    render() {
        const { keyword } = this.state;
        const { searching, results } = this.props;
        return (
            <div className="container">
                <div className="row container-orange container-border">
                    <div className="col-md-12">
                        {/* <form className="form-inline" name="seasrchForm" onSubmit={this.handleSubmit}> */}
                        <div className="row">
                            <div className="col-md-10">
                                <div className="formGroup">
                                    <input className="form-control" type="text" name="keyword" value={keyword} placeholder="Enter User Name" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="formGroup">
                                    { searching && 
                                        <button className="btn btn-primary" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>
                                    }
                                    { !searching &&                   
                                        <button className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
                <Link to="/login">Logout</Link>
                { results.length > 0 && 
                    <div className="row container-grey container-border">
                        <div className="col-md-12">
                            <SearchResults keyword={keyword} data={results}></SearchResults>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { searching, keyword, results } = state.search;
    console.log('state', state)
    return {
        searching,
        keyword,
        results
    };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage }; 
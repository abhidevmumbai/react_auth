import React from 'react';

export class SearchResults extends React.Component {
    
    render() {
        const {keyword, data} = this.props;
        return (
            <div className="search-results">
                Search results for:- {keyword}
                {data.length &&
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((user, index) =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        )        
    }
}
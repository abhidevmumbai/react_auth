import React from 'react';

export class SearchResults extends React.Component {
    
    render() {
        const {data} = this.props;
        return (
            <div className="search-results">
                Search results:-
                {data &&
                    <ul>
                        {data.map((user, index) =>
                            <li key={user.id}>
                                {user.username + ' ' + user.status}
                            </li>
                        )}
                    </ul>
                }
            </div>
        )        
    }
}
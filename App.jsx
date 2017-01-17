import $ from 'jquery';
import React from 'react';


var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            //console.log(lastGist.comments);
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
        {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

export default UserGist;
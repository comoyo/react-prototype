import $ from 'jquery';
import React from 'react';


var LatestArticle = React.createClass({

    getInitialState: function() {
        return {
            data: [], value: {}, showOutput: false
        }
    },


    componentDidMount: function() {
        $.get("http://evergreen-react.dev/api/public/api/names", function(result) {
            this.setState({
                data: result
            });
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <h1>{this.state.data.name}</h1>
            </div>
        );
    }
});

export default LatestArticle;

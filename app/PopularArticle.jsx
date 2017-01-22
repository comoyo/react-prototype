import $ from 'jquery';
import React from 'react';

// popular articles

var PopularArticle = React.createClass({

    getInitialState: function() {
        return {
            data: []
        }
    },


    componentDidMount: function() {
        $.get("http://evergreen-react.dev/api/popular-article", function(result) {

            this.setState({
                data: result
            });
        }.bind(this));
    },


    render: function() {

        return (
            <div>
                {this.state.data.map((latest, i) => <PopularWidget key = {i} data = {latest} />)}
            </div>
        );
    }

});


class PopularWidget extends React.Component {
    render() {
        return (

            <div className={"row trending-article"}>
                <div className={"col-xs-5 col-md-4 trending-article-img"}>
                    <a href="#"><img src={"http://mytonic-revamp-staging.s3.amazonaws.com/revamp/s3fs-public/" + this.props.data.filename} /></a>
                    <div className={"category-banner"}>{this.props.data.taxonomy_name}</div>
                </div>
                <div className={"col-xs-7 col-md-8 trending-article-info"}>
                    <h3><a href="#">{this.props.data.title}</a></h3>
                    <div className={"author-info clearfix"}>
                        <a href="#" className={"clickable-card"}></a>
                        <p className={"visible-xs post-date-mobile"}> {this.props.data.formatted_created_on}</p>
                        <div className={"author-pic pull-left"}>
                            <img src={"http://mytonic-revamp-staging.s3.amazonaws.com/revamp/s3fs-public/pictures/" + this.props.data.profile_image} />
                        </div>

                        <p className={"pull-left"}>{this.props.data.field_user_full_name_value} <span> &bull; </span> </p>
                        <p className={"pull-left hidden-xs"}> {this.props.data.formatted_created_on}</p>
                    </div>
                </div>
            </div>


        );
    }
}

export default PopularArticle;



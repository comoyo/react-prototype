
// latest articles
var LatestArticle = React.createClass({

    getInitialState: function() {
        return {
            data: []
        }
    },


    componentDidMount: function() {
        $.get("/api/latest-article", function(result) {

            this.setState({
                data: result
            });
        }.bind(this));
    },


    render: function() {
        return (
            <div>
                {this.state.data.map((latest, i) => <LatestWidget key = {i} data = {latest} />)}
            </div>
        );
    }
});

class LatestWidget extends React.Component {
    render() {
        return (

                <div className={"col-xs-12 col-md-4 popular-article"}>
                    <div className={"card"}>
                        <a href="#" className={"clickable-card"}></a>
                        <div className={"card-article-image"}>
                            <img src={"http://mytonic-revamp-staging.s3.amazonaws.com/revamp/s3fs-public/" + this.props.data.filename} />
                                <div className={"category-banner"}>{this.props.data.taxonomy_name}</div>
                            </div>
                            <div className={"card-article"}>
                                <h3>{this.props.data.title}</h3>
                                <div className={"clearfix"}>
                                    <p className={"pull-left"}> 185 Views</p>
                                    <p className={"articles-seen-by pull-left"}><i className={"fa fa-smile-o"}></i> 223</p>
                                </div>
                                <div className={"clearfix"}>
                                    <p className={"pull-left"}>{this.props.data.formatted_created_on}</p>
                                </div>
                            </div>
                        </div>
                    </div>


        );
    }
}


ReactDOM.render(
    <LatestArticle />, document.getElementById('react-latest-articles')
);


// popular articles

var PopularArticle = React.createClass({

    getInitialState: function() {
        return {
            data: []
        }
    },


    componentDidMount: function() {
        $.get("api/popular-article", function(result) {

            console.log(result);

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
                                <img src="images/anika.jpg" />
                                </div>
                                <p className={"pull-left"}>Anika Rabbani <span> &bull; </span> </p>
                                <p className={"pull-left hidden-xs"}> {this.props.data.formatted_created_on}</p>
                            </div>
                        </div>
                    </div>


        );
    }
}

ReactDOM.render(
    <PopularArticle />, document.getElementById('react-popular-articles')
);
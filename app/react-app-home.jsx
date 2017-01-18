var LatestArticle = React.createClass({

    getInitialState: function() {
        return {
            data: [], title: [], filename: [], formatted_created_on: []
        }
    },


    componentDidMount: function() {
        $.get("/api/latest-article", function(result) {

            console.log(result);

            this.setState({
                data: result
            });
        }.bind(this));
    },


    render: function() {
        return (
            <div>
                {this.state.data.map((latest, i) => <LatestContainer key = {i} data = {latest} />)}
            </div>
        );
    }
});

class LatestContainer extends React.Component {
    render() {
        return (

                <div className={"col-xs-12 col-md-4 popular-article"}>
                    <div className={"card"}>
                        <a href="#" className={"clickable-card"}></a>
                        <div className={"card-article-image"}>
                            <img src={"http://mytonic-revamp-staging.s3.amazonaws.com/revamp/s3fs-public/" + this.props.data.filename} />
                                <div className={"category-banner"}>Lifestyle</div>
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
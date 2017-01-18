//var Greeting = React.createClass({
//    render: function() {
//        return (
//            <p>{this.props.message}</p>
//        );
//    }
//});
//
//setInterval(function() {
//    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
//    var randomMessage = messages[Math.floor((Math.random() * 3))];
//
//    ReactDOM.render(
//        <Greeting message={randomMessage}/>,
//        document.getElementById('greeting-div')
//    );
//}, 2000);

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
                {this.state.data.map((latest, i) => <TableRow key = {i} data = {latest} />)}
            </div>
        );
    }
});

class TableRow extends React.Component {
    render() {
        return (

        //<ul>
        //    <li>{this.props.data.title}</li>
        //    <li>{this.props.data.nid}</li>
        //    <li>{this.props.data.filename}</li>
        //</ul>
        //    <div className={"col-xs-12 col-md-4 popular-article"}>
        //    </div>

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
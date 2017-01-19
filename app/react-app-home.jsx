
//class MyClass extends React.Component{
//
//
//    getInitialState(){
//        return {
//            data: []
//        }
//    }
//
//    componentDidMount() {
//        console.log('Component DID MOUNT!')
//    }
//
//    render(){
//        return(
//            <h1>Hello React</h1>
//        )
//    }
//}
//
//export default MyClass;

//ReactDOM.render(
//    <MyClass />, document.getElementById('react-test')
//);

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
                                    <p className={"pull-left"}> {this.props.data.total_read_count} Views</p>
                                    <p className={"articles-seen-by pull-left"}><i className={"fa fa-smile-o"}></i> 223</p>
                                </div>

                                <div className={"author-info clearfix"}>
                                    <div className={"author-pic pull-left"}>
                                        <div className={"user-picture"}>
                                            <a href="/bn/users/rafi" title="View user profile.">
                                                <img src={"http://mytonic-revamp-staging.s3.amazonaws.com/revamp/s3fs-public/pictures/" + this.props.data.profile_image} />
                                            </a>
                                        </div>

                                    </div>
                                        <p className={"pull-left"}>{this.props.data.field_user_full_name_value}<span> • </span></p>

                                        <p className={"pull-left"}><span className={"post-date"}>
                                            {this.props.data.formatted_created_on}</span></p>
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

ReactDOM.render(
    <PopularArticle />, document.getElementById('react-popular-articles')
);


// slider

var HomeCarousel = React.createClass({

    getInitialState: function() {
        return {
            data: [], active:''
        }
    },


    componentDidMount: function() {
        $.get("/api/slider", function(result) {

            this.setState({
                data: result
            });
        }.bind(this));
    },


    render: function() {

        return (
            <div id={"myCarousel"} className={"carousel slide"} data-ride="carousel">

                <div className={"carousel-inner"} role="listbox">

                    {this.state.data.map((slider, i) => <SliderWidget key = {i} data = {slider} active={i==0?' active':''} />)}

                </div>
                <a className={"left carousel-control"} href="#myCarousel" role="button" data-slide="prev">
                    <i className={"fa fa-angle-left"} aria-hidden="true"></i>
                </a>
                <a className={"right carousel-control"} href="#myCarousel" role="button" data-slide="next">
                    <i className={"fa fa-angle-right"} aria-hidden="true"></i>
                </a>
                <ol className={"carousel-indicators"}>
                    <li data-target="#myCarousel" data-slide-to="0" className={"active"}></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
            </div>
        );
    }

});

//{this.state.data.map((slider, i) => <SliderWidget key = {i} data = {slider} />)}

class SliderWidget extends React.Component {
    render() {
        return (

            <div className={"item" + this.props.active}>
                <img className={"first-slide"} src="images/pexels.jpeg" alt="First slide" />
                <div className={"container"}>
                    <div className={"carousel-caption"}>
                        <h3>Research Indicates Breakfast is the Most Important Meal</h3>
                        <p><a className={"btn btn-primary"} href="#" role="button">Find Out More</a></p>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <HomeCarousel />, document.getElementById('react-home-carousel')
);
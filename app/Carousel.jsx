import $ from 'jquery';
import React from 'react';

// slider

var HomeCarousel = React.createClass({

    getInitialState: function() {
        return {
            data: [], active:''
        }
    },


    componentDidMount: function() {
        $.get("api/slider", function(result) {

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


export default HomeCarousel;



import React, { Component } from 'react';
import './Details.css';
import accountCircle from '../../assets/accountCircle.svg';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import Button from '@material-ui/core/Button';
import restaurantDetails from '../../common/restaurantDetails';
import Typography from '@material-ui/core/Typography';
import 'font-awesome/css/font-awesome.min.css';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({

});


class Details extends Component {

    constructor() {
        super();
        this.state = {
            restaurant: {}
        }
    }


    // componentDidMount() {
    //     let currentState = this.state;
    //     currentState.restaurant = restaurantDetails.filter((res) => {
    //         return res.id === "5485eb18-a23b-11e8-9077-720006ceb890"
    //     })[0];
    //     this.setState({ currentState });
    //     console.log(this.state);
    // }

    render() {

        //let restaurantDetails = this.state.restaurant;






        return (


            <div className="details">





                <header className="app-header-container">

                    <div className="fastfood-icon-container">
                        <FastFoodIcon />
                    </div>
                    <div className="login-button-container">
                        <Button variant="contained" color="default" >
                            <img src={accountCircle} className="accountCircle-logo" alt="accountCircle" />Login</Button>
                    </div>

                </header>



                <div className="flex-containerDetails">

                    <div className="leftDetails">
                        <img className="restaurant-img" src={restaurantDetails.photo_URL} />

                    </div>

                    <div className="rightDetails">
                        <div>
                            <Typography variant="headline" component="h3">{restaurantDetails.restaurant_name}</Typography>
                        </div>

                        <div className="locality-div">
                            {restaurantDetails.address.locality}

                        </div>


                        <br />
                        <div>
                        
                        {restaurantDetails.categories.map((category, index) => ( (index ? ', ': '') + category.category_name ))}
          
                        
                     </div>

                       
                        <br />

                        <div className="fa-icon">

                            <div className="fa-fa-star">
                                <i class="fa fa-star" aria-hidden="true"></i>{restaurantDetails.customer_rating}
                                <div className="average-rating">AVERAGE RATING BY <br />{restaurantDetails.number_customers_rated} CUSTOMERS</div>
                            </div>

                            <div className="fa-fa-inr">
                                <i class="fa fa-inr" aria-hidden="true"></i>{restaurantDetails.average_price}

                                <div className="average_price">AVERAGE COST FOR<br /> TWO PEOPLE</div>


                            </div>
                        </div>   

                    </div>





                 </div>
                  
                 </div>
                    );
                }
            }
            
            export default  withStyles(styles)(Details);

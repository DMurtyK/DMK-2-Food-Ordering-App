import React, { Component } from 'react';
import './Details.css';
import accountCircle from '../../assets/accountCircle.svg';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import Button from '@material-ui/core/Button';
import restaurantDetails from '../../common/restaurantDetails';
import Typography from '@material-ui/core/Typography';
import 'font-awesome/css/font-awesome.min.css';
import { withStyles } from "@material-ui/core/styles";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


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
        const classes = styles();
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

                <br />
                <div className = "bottomContainerDetails">

                     <div className="bottomleft-category-Details">
                    
                         <div>
                         {restaurantDetails.categories.map((category, index) => (
                       
                        
                             <List className= "list-category-name" key = {category.id}>
                             <ListItem>
                             <ListItemText primary={category.category_name} className="list-category-name" />
                             </ListItem>
                             <Divider />
                             {
                                category.item_list.map((subitem, i) => {
                                  return (
                                   
                                <ul  key = {subitem.id}>
                                    <div className="item-row">
                                        <div className="item-row-left">
                                           <i class="fa fa-circle" color={subitem.item_type=="VEG" ? red : green } id="facircle" aria-hidden="true"></i>{subitem.item_name} 
                                        </div>

                                        <div className="item-row-right">
                                           <i class="fa fa-inr" id = "fainr" aria-hidden="true" ></i>{subitem.price}
                                           <AddIcon className="add-icon"  />
                                           
                                        </div>
                                    </div>

                                </ul>
                                    
                                  )
                                })
                               }
                         
                            </List>
                        
                        
                           ))}
                     
                    
                        </div>
                    
                     </div>

                     <div className="bottomright-cart-Details">
                    
                    
                    
                     </div>


                </div>

                  
            </div>
                    );
                }
            }
            
            export default  withStyles(styles)(Details);

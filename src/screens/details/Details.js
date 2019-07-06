import React, { Component } from 'react';
import './Details.css';
import accountCircle from '../../assets/accountCircle.svg';

import FastFoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import restaurantDetails from '../../common/restaurantDetails';
import Typography from '@material-ui/core/Typography';
import 'font-awesome/css/font-awesome.min.css';
import { withStyles } from "@material-ui/core/styles";

//import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
//import Icon from '@material-ui/core/Icon';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
//import Snackbar from '@material-ui/core/Snackbar';
//import SnackbarContent from '@material-ui/core/SnackbarContent';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
                                                                    


const styles = theme => ({
     title: {
    fontSize: 14,
  },
  
     
});






class Details extends Component {
   

    constructor() {
        super();
        this.state = {
            restaurant: {},
            restaurantDataById:{

                "id": "",
                 "restaurant_name": "",
                "photo_URL": "",
                "customer_rating": "",
               "average_price": "",
               "number_customers_rated": "",
               "address": {
                   "id": "",
                   "flat_building_name": "",
                   "locality": "",
                   "city": "",
                   "pincode": "",
                   "state": {
                       "id": "",
                       "state_name": ""
                    }

                },
               "categories":[],

            }
        }
        
    }
    
    AddSnackBarCloseHandler = () => {
        this.setState({ AddSnackBarIsOpen: false });
    }
    AddItemHandler = () => {
        this.setState({ AddSnackBarIsOpen: true });

    }
    componentWillMount() {
    //      let currentState = this.state;
    //      currentState.restaurant = restaurantDetails.filter((res) => {
    //         //return res.id === "5485eb18-a23b-11e8-9077-720006ceb890"
    //            return res.id === this.props.restaurantId;
    //      })[0];
    //      this.setState({ currentState });
    //  console.log(this.state);
    //    // this.getAllRestaurantData();
    
    this.getRestaurantByRestaurantId();
  
    }
    
    getRestaurantByRestaurantId = () => {

        let dataLogin = null;
       let xhrLogin = new XMLHttpRequest();
       let that = this;
      // let restaurantId = this.props.restaurantId;
      let restaurantId = "5485eb18-a23b-11e8-9077-720006ceb890";
       xhrLogin.addEventListener("readystatechange", function () {
           if (this.readyState === 4) {
               if (xhrLogin.status === 200 || xhrLogin.status === 201){
 
 
 
                that.setState({
                 restaurantDataById: JSON.parse(this.responseText)
 
                });             
            }
        }
        });	    
      
 
        xhrLogin.open("GET", "http://localhost:8080/api/restaurant/"+restaurantId);
 
        xhrLogin.setRequestHeader("Content-Type", "application/json");
       xhrLogin.setRequestHeader("Cache-Control", "no-cache");
       xhrLogin.send(dataLogin);
 
 
        }
    


/*
 

    getRestaurantByRestaurantId = () => {

      let dataLogin = null;
      let xhrLogin = new XMLHttpRequest();
      let that = this;
    
      //let id=this.props.match.params.id;
      xhrLogin.addEventListener("readystatechange", function () {
          if (this.readyState === 4) 
          {
              that.setState({
                restaurantDataById: JSON.parse(this.responseText)
            });
        }
    });
      xhrLogin.open("GET", "http://localhost:8080/api/restaurant/5485eb18-a23b-11e8-9077-720006ceb890");
     
     //xhr.open("GET", this.props.baseUrl + "/restaurant/"+ id);
     //xhrLogin.open("GET", "http://localhost:8080/api" + "/restaurant/"+ id);
     
      xhrLogin.setRequestHeader("Content-Type", "application/json");
      xhrLogin.setRequestHeader("Cache-Control", "no-cache");
      xhrLogin.send(dataLogin);

         
      }
  
    */

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
                        <img className="restaurant-img" src={this.state.restaurantDataById.photo_URL} />

                    </div>

                    <div className="rightDetails">
                        <div>
                            <Typography variant="headline" component="h3">{this.state.restaurantDataById.restaurant_name}</Typography>
                        </div>

                        <div className="locality-div">
                            {this.state.restaurantDataById.address.locality}

                        </div>


                        <br />
                        <div>
                        
                        {this.state.restaurantDataById.categories.map((category, index) => ( (index ? ', ': '') + category.category_name ))}
          
                        
                     </div>

                       
                        <br />

                        <div className="fa-icon">

                            <div className="fa-fa-star">
                                <i class="fa fa-star" aria-hidden="true"></i>{this.state.restaurantDataById.customer_rating}
                                <div className="average-rating">AVERAGE RATING BY <br />{this.state.restaurantDataById.number_customers_rated} CUSTOMERS</div>
                            </div>

                            <div className="fa-fa-inr">
                                <i class="fa fa-inr" aria-hidden="true"></i>{this.state.restaurantDataById.average_price}

                                <div className="average_price">AVERAGE COST FOR<br /> TWO PEOPLE</div>


                            </div>
                        </div>   

                    </div>

                    

                </div>

                <br />
                <div className = "bottomContainerDetails">

                     <div className="bottomleft-category-Details">
                    
                         <div>
                         {this.state.restaurantDataById.categories.map((category, index) => (
                       
                        
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
                                           <i class="fa fa-circle"    id="facircle" aria-hidden="true" style={{color : subitem.item_type =="VEG" ? "green" : "red" }}></i>{subitem.item_name} 
                                        </div>

                                        <div className="item-row-right">
                                        
                                          <i class="fa fa-inr" id = "fainr"  aria-hidden="true" ></i>{subitem.price}
                                         
                                          <AddIcon className="add-icon" onClick={this.AddItemHandler} />
                                           
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

                     <Card className={classes.card}>
                        <CardContent>

                        <div>
                        <Badge  className = "badge" badgeContent={4} color="primary">
                            <ShoppingCart />
                            </Badge>
                            <span  className = "my-cart-header">My Cart</span>
                         </div>
                         <div>
                         <span className="total-amount">TOTAL AMOUNT</span>
                         
                         <i id = "rupee" class="fa fa-inr"  aria-hidden="true" ></i>
                         </div>
                         <button>CHECKOUT</button>
                         
                         
                        
                        
                        
                        

                        </CardContent>
                       

                     </Card>
                    
                    
                    
                     </div>


                </div>
                <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                className="snackbar"
                open={this.state.AddSnackBarIsOpen}
                onClose={this.AddSnackBarCloseHandler}
                ContentProps={{ 'aria-describedby': 'message-id', }}
                message={<span id="message-id">Item added to cart!</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.AddSnackBarCloseHandler}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
               />

                  
            </div>
                    );
                }
            }
            
            export default  withStyles(styles)(Details);

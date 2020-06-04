import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css'
import SOAP from '../icons/logo/SOAP.svg';
import HomeIcon from '../icons/HomeIcon';
import PostsIcon from '../icons/PostIcon';
import AdsIcon from '../icons/AdsIcon';
import RateIcon from '../icons/RateIcon';
import TopRated from '../icons/TopRatedIcon';
import LogOut from '../icons/LogOutIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


const items = [
    {
        name: 'Home',
        key: 1
    },
    {
        name: 'Posts',
        key: 2
    },
    {
        name: 'Rate',
        key: 3
    },
    {
        name: 'Ads',
        key: 4
    },
    {
        name: 'Top Rated',
        key: 5
    }
];

export default class Sidebar extends React.Component{


    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};
        this.handleSidebarClicks = this.handleSidebarClicks.bind(this);

      }
    handleSidebarClicks = (event, index) => {
        console.log(index);
        this.setState({
        selectedIndex: index
        
    });
    };
    render(){
        return(
            <div className="sidebar" >
                <a href="#" className="logo"> <img  src={SOAP}/> </a>
                <ul className="sidebar_items">
                    {items.map((item,index) => (
                        <li key={item.key} className="sidebar_item">
                            <a href="#"
                            onClick={event => this.handleSidebarClicks(event, index)}
                            className="linkk"
                             >
                                <div className="container_iconname">{item.name === "Home"? <HomeIcon fill={this.state.selectedIndex === index? "#247189" :""} /> : 
                                item.name === "Posts"? <PostsIcon fill={this.state.selectedIndex === index? "#247189" :""}/>: 
                                item.name === "Ads"? <AdsIcon fill={this.state.selectedIndex === index? "#247189" :""}/>: 
                                item.name === "Rate"? <RateIcon fill={this.state.selectedIndex === index? "#247189" :""}/>:
                                item.name === "Top Rated"? <TopRated fill={this.state.selectedIndex === index? "#247189" :""}/>:""}
                                <span className="sidebar_item_text"  style={{color: this.state.selectedIndex === index? "#247189" :""}}>
                                    {item.name}</span></div></a>
                        </li>
                    ))}

                </ul>

                <a href="#" className="log_out"><LogOut /></a>
             </div>

        )     }
    

}
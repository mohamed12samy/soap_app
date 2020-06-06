import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css'
import SOAP from '../../assets/images/svg/logo/SOAP';
import HomeIcon from '../../assets/images/svg/HomeIcon';
import PostsIcon from '../../assets/images/svg/PostIcon';
import AdsIcon from '../../assets/images/svg/AdsIcon';
import RateIcon from '../../assets/images/svg/RateIcon';
import TopRated from '../../assets/images/svg/TopRatedIcon';
import LogOut from '../../assets/images/svg/LogOutIcon';

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
                <a href="#" className="logo"><SOAP width="146px" height="43px"/> </a>
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
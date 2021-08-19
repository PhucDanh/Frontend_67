import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
// import "./style.css"
import { AppBar, Toolbar, IconButton, Typography, withStyles } from "@material-ui/core"
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { styles } from "./style";
import { connect } from 'react-redux';
import { Fragment } from 'react';

 class Header extends Component {
    render() {
        // console.log(this.props.classes);
        const { tittle, navLink, activeNavLink } = this.props.classes;
        return (
            <div>
                {/* {this.props.children} */}
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <ImportContactsIcon />
                        </IconButton>
                        <Typography className={tittle} variant="h6">
                            E-learning
                        </Typography>
                        <NavLink className={navLink} activeClassName={activeNavLink} exact to="/">Home</NavLink>

                        {
                            this.props.me ? (
                                <span className={`${navLink} ${activeNavLink}`}>Hello, {this.props.me.hoTen}</span>
                            ) : (
                                <Fragment>
                                    <NavLink className={navLink} activeClassName={activeNavLink} to="/signin">Sign In</NavLink>
                                    <NavLink className={navLink} activeClassName={activeNavLink} to="/signup">Sign Up</NavLink>
                                </Fragment>
                            )
                        }

                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({me: state.me})
 
export default connect(mapStateToProps)(withStyles(styles)(Header))
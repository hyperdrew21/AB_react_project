import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
=======
import PortfolioForm from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
>>>>>>> bd76c50c7566a712b9b2ce793f8e987f2fa6a087

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
<<<<<<< HEAD
            portfolioItems: [],
            portfolioToEdit: {}           
        };

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }

    clearPortfolioToEdit() {
        this.setState({ 
            portfolioToEdit: {}
        });
    }

    handleEditClick(portfolioItem) {
        this.setState({ 
            portfolioToEdit: portfolioItem
        });
    }

    handleDeleteClick(portfolioItem) {
        axios
            .delete(
                `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, 
        { withCredentials: true }
        )
        .then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
             });

             return response.data;
        })
        .catch(error => {
            console.log("handleDeleteClick error", error);
        });
    }

    handleEditFormSubmission() {
        this.getPortfolioItems();
    }

    handleNewFormSubmission(portfolioItem) {
        
       this.setState({
           portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
=======
            portfolioItems: []            
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfoiloItem) {
       this.setState({
           portfolioItems: [portfoiloItem].concat(this.state.portfolioItems)
>>>>>>> bd76c50c7566a712b9b2ce793f8e987f2fa6a087
       });
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionsError error", error);
    }

    getPortfolioItems() {
        axios
<<<<<<< HEAD
        .get(
            "https://andrewbristow.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", 
            { 
            withCredentials: true
            }
        )
=======
        .get("https://andrewbristow.devcamp.space/portfolio/portfolio_items", 
        { withCredentials: true
        })
>>>>>>> bd76c50c7566a712b9b2ce793f8e987f2fa6a087
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
        })
        .catch(error => {
            console.log('error in get portfolio items', error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                <PortfolioForm 
<<<<<<< HEAD
                handleNewFormSubmission={this.handleNewFormSubmission}
                handleEditFormSubmission={this.handleEditFormSubmission}
                handleFormSubmissionError={this.handleFormSubmissionError}
                clearPortfolioToEdit={this.clearPortfolioToEdit}
                portfolioToEdit={this.state.portfolioToEdit}
                />
                </div>
                <div className="right-column">
                < PortfolioSidebarList 
                handleDeleteClick={this.handleDeleteClick}
                data={this.state.portfolioItems}
                handleEditClick={this.handleEditClick}
                />
=======
                handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                handleFormSubmissionError={this.handleFormSubmissionError}
                />
                </div>
                <div className="right-column">
                < PortfolioSidebarList data={this.state.portfolioItems} />
>>>>>>> bd76c50c7566a712b9b2ce793f8e987f2fa6a087
                </div>
            </div>
        );
    }
}
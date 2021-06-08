import React, { Component } from "react";
import axios from "axios";
import PortfolioForm from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []            
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfoiloItem) {
       this.setState({
           portfolioItems: [portfoiloItem].concat(this.state.portfolioItems)
       });
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionsError error", error);
    }

    getPortfolioItems() {
        axios
        .get("https://andrewbristow.devcamp.space/portfolio/portfolio_items", 
        { withCredentials: true
        })
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
                handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                handleFormSubmissionError={this.handleFormSubmissionError}
                />
                </div>
                <div className="right-column">
                < PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        );
    }
}
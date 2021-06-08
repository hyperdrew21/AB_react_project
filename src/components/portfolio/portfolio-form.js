import React, { Component } from "react";
import axios from "axios";

export default class PortfolioForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            description: "",
            category: "Food",
            position: "",
            url: "",
            thumb_img: "",
            banner_img: "",
            logo: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

        return formData;
}

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        axios.post(
            "https://andrewbristow.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true}
        )
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
            
        })
        .catch(error => {
            console.log("portfoilo form handleSubmit error" , error);
        });
            
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Portfolio Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />

                        <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                        />

                        <select
                        
                        
                        placeholder="category"
                        value={this.state.catagory}
                        onChange={this.handleChange}
                        >
                            <option value="Food">Food</option>
                            <option value="Blog">Blog</option>
                            <option value="Life">Life</option>
                            <option value="Family">Family</option>
                            <option value="Tech">Tech</option>
                            <option value="Business App">Business App</option>
                            <option value="SalesForce App">SalesFoce App</option>
                            <option value="Religious">Religious</option>
                        </select>    
                    </div>

                    <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
import React, { Component, useRef } from "react";
import './css/header.css'
import { Sort } from "@material-ui/icons";

// ===============================================================
class Header extends Component {
    state = {
        liSortBy: ['title', 'year', 'rating', 'download_count', 'like_count', 'date_added']
    };

    componentDidMount(){
        this.createSortList();
    }
    componentdid



    createSortList = () => {
        const ul = document.querySelector(".navUl");
        const liSortByArr = this.state.liSortBy;

        liSortByArr.forEach((text, index) => {
            const li = document.createElement("li");
            li.id = index;
            li.addEventListener("click", this.handlerSortBy);
            li.innerText = text;
            if(text === "download_count") { li.classList.add("clicked"); }

            ul.appendChild(li);
        });

        return "";
    }
    propsFromParent = (event) => {
        let parentNode = event.target.parentNode;
        let selectedLi = event.target;
        console.log(parentNode);
        parentNode.childNodes.forEach(element => {
            element.classList.remove("clicked");
        });
        selectedLi.classList.add("clicked");

        this.props.callbackFromParent(event.target.innerText);
    }



    render(){
        return(
            <header>
                <span>Movie Rating ★</span>
                <nav>
                    <label className="navLabel">Sort By&nbsp;<Sort fontSize="large"/></label>
                    <ul className="navUl" onClick={this.propsFromParent}>
                    </ul>
                </nav>
            </header>
        );
    };
}




// =============================================================

export default Header
import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    his is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <Link to="/products">View products</Link>
            </Jumbotron>
        </div>


    );
}
export default Menu;
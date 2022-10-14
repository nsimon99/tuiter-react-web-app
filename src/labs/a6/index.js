import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import {Link}
    from "react-router-dom";

function Assignment6() {
    return (
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;





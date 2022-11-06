import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";



const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)

    useEffect(() => {
        (findTuitsThunk())
    }, [])


    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post =>
                    <TuitItem
                        key={post._id}
                        tuit={post}
                    />
                )
            }

        </ul>
    );
};
export default TuitsList;
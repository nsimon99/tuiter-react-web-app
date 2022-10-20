import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-10">
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                <div>{tuit.userName} . {tuit.time}</div>

                <div className="fw-bolder">{tuit.topic}</div>
                <div>{tuit.title}</div>
            </div>
            <div className="col-2">
                <img width={70} className="float-end rounded-3" src={`../../../image/${tuit.image}`} alt={""}/>
            </div>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit}/>
        </div>
    </li>
    )
}
export default TuitItem;
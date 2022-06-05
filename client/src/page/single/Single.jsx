import SideBar from "../../components/sideBar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./Single.css";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}

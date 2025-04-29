import { useContext } from "react";
import { UserContext } from "../context/AuthContext";


const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user)

    if(!user) {
        return <p>Please Login first!</p>
    }

    return <h2>Welcome {user.username}</h2>
};

export default Profile;
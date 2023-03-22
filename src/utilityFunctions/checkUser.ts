import axios from "axios";

const checkUser = async (username: string) => {
    try {
        const url = "https://api.opensauced.pizza/v1/users/";
        const response = await axios.get(url + username);

        return {
            ...response,
            "res": "ok",
        };
    } catch(error) {
        console.error(error);
        return {
            "res": "error",
        };
    }
}

export default checkUser;

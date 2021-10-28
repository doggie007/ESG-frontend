import axios from "axios";
const APIUrl = "https://backend-investures.herokuapp.com/api/";
const axiosBase = axios.create({
	baseURL: APIUrl,
	// headers: { contentType: "application/json" },
});
export { axiosBase };

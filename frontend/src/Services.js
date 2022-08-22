import axios from "axios";
const url = "http://localhost:5000/api";

export const getAllMatches = async () => {
  const AllMatches = await axios.get(`${url}/matches/getAll`);
  return AllMatches.data;
};

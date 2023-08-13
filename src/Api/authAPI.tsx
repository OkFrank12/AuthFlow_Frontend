import axios from "axios";

const URL: string = "http://localhost:1000/api/v1";

interface iData {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
}

export const registerAPI = async (data: any) => {
  try {
    const config = {
      "content-type": "multipart/formdata",
    };
    return await axios
      .post(`${URL}/register`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const signInAPI = async (data: iData) => {
  try {
    return await axios.post(`${URL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const seeOneAPI = async (authID: string) => {
  try {
    return await axios.get(`${URL}/${authID}/see`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

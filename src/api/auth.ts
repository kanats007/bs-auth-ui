import axios from "@/lib/axios";

const csrf = () => axios.get("/sanctum/csrf-cookie");

export const getUser = async () => {
  try {
    return await axios.get("/api/user");
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export const registerUser = async (props: any) => {
  await csrf();

  try {
    return await axios.post("/register", props);
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export const login = async (props: any) => {
  await csrf();
  try {
    return await axios.post("/login", props);
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export const logout = async () => {
  try {
    return await axios.post("/logout");
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export const forgotPassword = async (props: any) => {
  await csrf();

  try {
    return await axios.post("/forgot-password", props);
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export const resetPassword = async (props: any) => {
  await csrf();

  try {
    return await axios.post("/reset-password", props);
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

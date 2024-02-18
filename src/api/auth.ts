import axios from "@/lib/axios";

const csrf = () => axios.get("/sanctum/csrf-cookie");

export const register = async (props: any) => {
  await csrf();

  await axios
    .post("/register", props)
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
      if (error.response.status !== 422) throw error;
    });
};

export const login = async (props: any) => {
  await csrf();
  console.log("login");
  axios
    .post("/login", props)
    .then((res) => {
      console.log(res);
      console.log("success");
      return res.status === 204;
    })
    .catch((error) => {
      throw error;
    });
};

export const logout = async () => {
  axios
    .post("/logout")
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

import axios from "axios";

const API_URL = "https://taskload-one.vercel.app/api/auth/login";

interface LoginProps {
email: string;
pass: string;
}
export const loginTaskload = async (data: LoginProps) => {
try {
    const response = await axios.post(
      API_URL,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Axios error:", error);
    throw error;
  }
};


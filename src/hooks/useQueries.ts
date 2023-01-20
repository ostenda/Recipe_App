import axios from "axios";

type RegisterFormTypes = {
  username: string;
  password: string;
  email: string;
  motherMaidenName: string;
};

export default function usePost(data: RegisterFormTypes, api: string) {
  axios.post(api, data);
}

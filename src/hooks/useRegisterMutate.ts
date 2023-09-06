import { useMutation } from "@tanstack/react-query";
import Http from "../utils/Http";
import { SetAuth } from "../utils/Auth";
import { RegisterAttributes } from "../interfaces/RegisterAttributes";

const useRegisterMutate = () => {
  const registerUserMutation = useMutation(async (formData: RegisterAttributes) => {
    const response = await Http.post("/register", formData);
    SetAuth(response.data);
    return response.data;
  });

  return { registerUserMutation };
};

export default useRegisterMutate;

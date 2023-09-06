import { useQuery } from "@tanstack/react-query";
import Http from "../utils/Http";
import { UserAttributes } from "../interfaces/UserAttributes";

const ENDPOINT = "/users";

const useGetUsers = (page: number) => {
  const { data, isLoading, isError } = useQuery<UserAttributes>(
    [`${ENDPOINT}/${page}`],
    async () => {
      const response = await Http.get(`${ENDPOINT}?page=${page}`);
      return response.data;
    }
  );

  return { users: data, isLoading, isError };
};

export default useGetUsers;

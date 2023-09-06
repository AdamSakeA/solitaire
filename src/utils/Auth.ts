import { AuthAttributes } from "../interfaces/AuthAttributes";

const GetAuth = (): AuthAttributes | null => {
  if (typeof window !== "undefined") {
    const adminString = localStorage.getItem("registerToken");
    if (adminString) {
      const admin: AuthAttributes = JSON.parse(adminString);
      return admin;
    }
  }
  return null;
};
const SetAuth = (data: AuthAttributes) => {
  const adminString = JSON.stringify(data);

  localStorage.setItem("registerToken", adminString);
};

const RemoveAuth = () => {
  const adminString = localStorage.getItem("registerToken");

  if (adminString) {
    localStorage.removeItem("registerToken");
  }
};

export { GetAuth, SetAuth, RemoveAuth };

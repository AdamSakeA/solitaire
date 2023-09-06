export interface UserAttributes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserTypes[];
  support: {
    url: string;
    text: string;
  };
}

export type UserTypes = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

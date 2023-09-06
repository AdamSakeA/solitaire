import { useState } from "react";
import { Layout, Button, Pagination } from "@/src/components/";
import { UserList } from "@/src/containers/";
import { RegisterModal } from "@/src/components/modals/";
import { useGetUsers } from "@/src/hooks/";
import { GetAuth, RemoveAuth } from "@/src/utils/Auth";

export default function UserPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const { users } = useGetUsers(currentPage);
  const auth = GetAuth();

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handleRemoveAuth = () => {
    RemoveAuth();
    setMessage("Success Remove Auth");
  };

  return (
    <Layout title="User Page">
      {toggle && <RegisterModal toggle={setToggle} setMessage={setMessage} />}
      {message && <p>{message}</p>}
      <div className="my-[0px]">
        <div className="flex justify-between">
          <h1 className=" font-bold text-4xl text-gray-700">User List</h1>
          {auth?.token ? (
            <Button onClick={handleRemoveAuth} className="px-[20px]">
              Remove Auth
            </Button>
          ) : (
            <Button onClick={handleToggle} className="px-[20px]">
              Register User
            </Button>
          )}
        </div>
        <UserList payload={users} />
      </div>
      {users && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={users.total_pages}
        />
      )}
    </Layout>
  );
}

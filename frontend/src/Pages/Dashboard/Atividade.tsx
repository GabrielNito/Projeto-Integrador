import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import ThreadPost from "@/components/Forum/Thread/ThreadPost";
import { fetchUserToken, User } from "@/components/utils";
import { useEffect, useState } from "react";

export default function Atividade() {
  const [userData, setUserData] = useState<User>();
  useEffect(() => {
    document.title = "Atividade do Usuário - DSM";

    async function fetchUser() {
      const response: User = await fetchUserToken();

      setUserData(response);
      console.log(response.dados.createdPosts);
    }
    fetchUser();
  }, []);

  return (
    <>
      <DashboardTitle title="Atividade do Usuário" />

      <div className="grid gap-4 lg:grid-cols-2">
        {userData?.dados.createdPosts.map((post) => {
          return <ThreadPost post={post} key={post.id} variant="dashboard" />;
        })}
      </div>
    </>
  );
}

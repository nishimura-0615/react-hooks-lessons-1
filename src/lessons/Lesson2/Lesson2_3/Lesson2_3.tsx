// USESWRはサーバーからのレスポンスを軽量かつ高速で受け取れる
// import { useFetchUser } from "./useFetchUser";
// APIにリクエストを飛ばす際はライブラリやフレームワークによってはuseFetchが望ましい。
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Lesson2_3: React.FC = () => {
  // const { user, loading } = useFetchUser(2);
  const {
    data:user,
    isloading: loading,
    error,
  } = useSWR(`https://jsonplaceholder.typicode.com/users/1`, fetcher);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が見つかりません。</div>;
  }

  return (
    <div>
      <h1>ユーザー情報</h1>
      <p>
        <strong>名前:</strong> {user.name}
      </p>
      <p>
        <strong>ユーザー名:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>都市:</strong> {user.address.city}
      </p>
    </div>
  );
};

export default Lesson2_3;

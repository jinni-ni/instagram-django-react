import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Suggestion from "./Suggestion";
import useAxios from "axios-hooks";
import { useAppContext } from "store";
import "./SuggestionList.scss";

export default function SuggestionList({ style }) {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [userList, setUserList] = useState([]);

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: origUserList, loading, error }, refetch] = useAxios({
    url: "http://localhost:8000/accounts/suggestions/",
    headers,
  });

  useEffect(() => {
    if (!origUserList) setUserList([]);
    else
      setUserList(origUserList.map((user) => ({ ...user, is_follow: false })));
  }, [origUserList]);

  const onFollowUser = (username) => {
    setUserList((prevUserList) => {
      return prevUserList.map((user) => {
        return user.username !== username ? user : { ...user, is_follow: true };
        // if (user.useranme === username) {
        //   return { ...user, is_follow: true };
        // } else {
        //   return user;
        // }
      });
    });
  };

  return (
    <div style={style}>
      {loading && <div>Loading...</div>}
      {error && <div>로딩중 에러 발생</div>}

      <button onClick={() => refetch()}>Reload</button>
      <Card title="Suggestions for you" size="small">
        {userList.map((suggestionUser) => (
          <Suggestion
            key={suggestionUser.username}
            suggestionUser={suggestionUser}
            onFollowUser={onFollowUser}
          />
        ))}
      </Card>
    </div>
  );
}

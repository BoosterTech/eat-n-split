import { useState } from "react";
import initialFriends from "../../initialFriends";
import AddFriendForm from "../AddFriendForm/AddFriendForm";
import Button from "../Button/Button";
import { Friend } from "../Friend/Friend";
import { List, Wrapper } from "./styled";

const FriendsList = () => {
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleOpen() {
    setIsAddFriendOpen(!isAddFriendOpen);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <List>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      {isAddFriendOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
      <Wrapper>
        <Button onClick={handleOpen}>
          {isAddFriendOpen ? "Close" : "AddFriend"}
        </Button>
      </Wrapper>
    </List>
  );
};

export default FriendsList;

import initialFriends from "../../initialFriends";
import { Friend } from "../Friend/Friend";
import { Button, List } from "./styled";

const FriendsList = () => {
  const friends = initialFriends;

  return (
    <List>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <Button>Add friend</Button>
    </List>
  );
};

export default FriendsList;

import initialFriends from "../../initialFriends";
import AddFriendForm from "../AddFriendForm/AddFriendForm";
import Button from "../Button/Button";
import { Friend } from "../Friend/Friend";
import { List } from "./styled";

const FriendsList = () => {
  const friends = initialFriends;

  return (
    <List>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <AddFriendForm />
      <Button>Add Friend</Button>
    </List>
  );
};

export default FriendsList;

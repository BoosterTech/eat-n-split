import initialFriends from "../../initialFriends";
import Friend from "../Friend/Friend";

const FriendsList = () => {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <button>Add friend</button>
    </ul>
  );
};

export default FriendsList;

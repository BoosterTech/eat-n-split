import AddFriendForm from "../AddFriendForm/AddFriendForm";
import Button from "../Button/Button";
import { Friend } from "../Friend/Friend";
import { List, ButtonWrapper } from "./styled";

const FriendsList = ({
  onSelection,
  selectedFriend,
  isAddFriendFormOpen,
  setIsAddFriendFormOpen,
  friends,
  setFriends,
}) => {
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleOpen() {
    setIsAddFriendFormOpen(!isAddFriendFormOpen);
  }

  return (
    <List>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
      {isAddFriendFormOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
      <ButtonWrapper>
        <Button onClick={handleOpen}>
          {!isAddFriendFormOpen ? "Add Friend" : "Close"}
        </Button>
      </ButtonWrapper>
    </List>
  );
};

export default FriendsList;

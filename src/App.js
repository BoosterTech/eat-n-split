import { useState } from "react";
import FriendsList from "./components/FriendsList/FriendsList";
import SplitForm from "./components/SplitForm/SplitForm";
import initialFriends from "./initialFriends";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleFriendSelect(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    if (selectedFriend === null) setIsAddFriendFormOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selectedFriend.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="App">
      <FriendsList
        friends={friends}
        setFriends={setFriends}
        onSelection={handleFriendSelect}
        selectedFriend={selectedFriend}
        isAddFriendFormOpen={isAddFriendFormOpen}
        setIsAddFriendFormOpen={setIsAddFriendFormOpen}
      />
      {selectedFriend && (
        <SplitForm friend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;

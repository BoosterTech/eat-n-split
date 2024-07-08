import { useState } from "react";
import { Form, FormButton, Item, Label } from "./styled";

function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      image: `${imageUrl}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setFriendName("");
    setImageUrl("https://i.pravatar.cc/48");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Item>
        <Label htmlFor="name">👪 Friend name</Label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder=""
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          autoComplete="name"
          required
        />
      </Item>

      <Item>
        <Label htmlFor="imageUrl">🏞️ Image URL</Label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          autoComplete="url"
          required
        />
      </Item>

      <FormButton>Add</FormButton>
    </Form>
  );
}

export default AddFriendForm;

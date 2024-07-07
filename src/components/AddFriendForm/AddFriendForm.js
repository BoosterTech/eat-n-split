import { Item, Label, Wrapper } from "./styled";

function AddFriendForm() {
  return (
    <Wrapper>
      <Item>
        <Label for="friendName">👪 Friend name</Label>
        <input placeholder="" />
      </Item>

      <Item>
        <Label>🏞️ Image URL</Label>
        <input value={` https://i.pravatar.cc/48`}/>
      </Item>
    </Wrapper>
  );
}

export default AddFriendForm;

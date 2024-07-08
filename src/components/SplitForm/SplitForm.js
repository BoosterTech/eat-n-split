import { useState } from "react";
import { Form, FormButton, Header, Input, Item, Label } from "./styled";

function SplitForm({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");

  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Header>SPLIT BILL WITH {friend.name}</Header>
      <Item>
        <Label htmlFor="billValue">💰Bill value</Label>
        <Input
          id="billValue"
          name="billValue"
          type="text"
          placeholder=""
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          autoComplete="billValue"
        />
      </Item>

      <Item>
        <Label htmlFor="myExpenses">🧍‍♀️Your expense</Label>
        <Input
          id="myExpenses"
          name="myExpenses"
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
          autoComplete="myExpenses"
        />
      </Item>

      <Item>
        <Label htmlFor="friendExpenses">👪{friend.name}'s expense</Label>
        <Input
          id="friendExpenses"
          name="friendExpenses"
          type="text"
          value={paidByFriend}
          autoComplete="friendExpenses"
          disabled
        />
      </Item>

      <Item>
        <Label htmlFor="payer">🤑Who is paying the bill?</Label>
        <select
          id="payer"
          name="payer"
          type="select"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          autoComplete="payer"
        >
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>
      </Item>
      <FormButton type="submit">Split</FormButton>
    </Form>
  );
}

export default SplitForm;

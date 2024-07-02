import { Button, Name, Text } from "./styled";
import { FriendInfo, FriendListItem, ImageContainer } from "./styled";

export const Friend = ({ friend }) => {
  return (
    <FriendListItem>
      <Image src={`${friend.image}/?u=${friend.id}`} friend={friend} />
      <FriendInfo>
        <Name>{friend.name}</Name>
        {friend.balance < 0 && (
          <Text>
            You owe {friend.name} {Math.abs(friend.balance)}$
          </Text>
        )}
        {friend.balance > 0 && (
          <Text>
            {friend.name} owes you {Math.abs(friend.balance)}$
          </Text>
        )}
        {friend.balance === 0 && <Text>You and {friend.name} are even</Text>}
      </FriendInfo>
      <Button>Select</Button>
    </FriendListItem>
  );
};

const Image = ({ src, friend }) => {
  return <ImageContainer src={src} alt={friend.name} />;
};

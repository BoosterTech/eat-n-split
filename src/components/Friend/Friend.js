const Friend = ({ friend }) => {
  return (
    <li>
      <img src={`${friend.image}/?u=${friend.id}`} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p>
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p>
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button>select</button>
    </li>
  );
};

export default Friend;

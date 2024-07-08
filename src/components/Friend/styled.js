import styled from "styled-components";

export const FriendListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  margin: 13px 0;
  max-width: 330px;
  width: 100%;

  ${(props) =>
    props.selected &&
    `
    background-color:#F9EFDC; 
    border-radius: 10px;
  `}
`;

export const ImageContainer = styled.img`
  border-radius: 100px;
`;

export const FriendInfo = styled.div``;

export const Name = styled.h3`
  margin: 0;
  font-size: 1rem;
  max-width: 150px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

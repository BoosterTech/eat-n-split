import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  padding: 10px 15px;
  margin-top: 40px;
  gap: 15px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const FormButton = styled.button`
  display: block;
  padding: 6px 11px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #f7a75e;
  margin-top: 8px;
  text-align: center;

  @media (hover: hover) {
    cursor: pointer;
  }
`;

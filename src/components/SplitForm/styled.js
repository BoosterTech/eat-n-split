import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  border-radius: 10px;
  background-color: #f9efdc;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  max-height: 285px;
  height: 100%;
  padding: 25px 15px;
  margin-top: 40px;
  gap: 15px;
  margin-left: 20px;
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
  margin-left: auto;
  text-align: center;
  max-width: 63px;
  width: 100%;

  @media (hover: hover) {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 55px;
`;

export const Header = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0 5px;
  margin: 0 0 15px 0;
  color: #595959;
  text-transform: uppercase;

`;

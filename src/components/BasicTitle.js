import styled from "styled-components";

// tagged template literal
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: ${props => props.special && "red"}; */
  /* color: ${({ special }) => special && "red"}; */
  color: ${({ special }) => (special ? "red" : "blue")};
`;

export default BasicTitle;

import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
  /* width: 200px; */
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-style: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-style: 1rem;
          font-weight: 400;
        `}
`;

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;

import styled from "styled-components";

const AuthStyle = styled.div`
  width: 500px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 3rem);
  }
`;

export default AuthStyle;

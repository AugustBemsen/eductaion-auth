import styled from "styled-components";

const Spinner = () => (
  <SpinnerStyles>
    <div className="loading-spinner" />
  </SpinnerStyles>
);

export default Spinner;

const SpinnerStyles = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;

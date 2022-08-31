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
    width: 25px;
    height: 25px;
    border: 2.5px solid ${({ theme }) => theme.colors.white}; /* Light grey */
    border-top: 2.5px solid ${({ theme }) => theme.colors.dark}; /* Black */
    border-radius: 50%;
    animation: spinner 0.4s linear infinite;
  }
`;

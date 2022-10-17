import styled from "styled-components";

export const DivModalposition = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed; 
  padding: 30%;
  top: 0; 
  left: 0;
  bottom: 0;
  z-index: 20000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute; 
  left: 0;
  bottom: 0;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivContainer = styled.div`
  position: relative;
  height: 27vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 90vw;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
  form {
    button {
    position: absolute;
    bottom: 10%;
    right: 10%;
    border: none;
    color: var(--mid-green);
    background-color: transparent;
    }
    select {
      padding: 0 2vw;
      margin-top: 10%; 
      font-size: 16px;
      width: 78vw;
      height: 7vh;
      border-radius: 5px;
      :focus {
        background-color: white;
      }
    }
  }
`;

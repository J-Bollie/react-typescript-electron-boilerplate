import React from "react";
import styled from "styled-components";

const Default = () => {
  return (
    <Container>
      <Test>I'm a boilerplate!</Test>
      <Button
        onClick={() => {
          window.api.send("toMain", [
            {
              command: "changeTheme",
            },
          ]);
        }}
      >
        Change Theme
      </Button>
    </Container>
  );
};

export default Default;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.mainBackground};
`;

const Test = styled.div``;

const Button = styled.button``;

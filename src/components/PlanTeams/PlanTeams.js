import React, { Fragment } from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Teams } from "./Teams";

export const PlanTeams = (props) => {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Teams></Teams>
      </DndProvider>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
`;

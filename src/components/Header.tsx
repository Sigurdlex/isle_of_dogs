import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ROYALBLUE } from 'constants/colors';

export const Header = ({ children }: { children: ReactNode }) => (
  <ContainerHeader>
    <Content>
      {children}
    </Content>
  </ContainerHeader>
);

const ContainerHeader = styled.header`
  min-width: 700px;
  z-index: 2;
  position: fixed;
  background: ${ROYALBLUE};
  height: 100px;
  width: 100%;
  top: 0;
  display: flex;
  box-shadow: 0 1px 15px black;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

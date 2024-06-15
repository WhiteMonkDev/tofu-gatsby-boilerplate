import React, { FC } from 'react';
import styled from 'styled-components';

type HelloProps = {
    label: string;
}
export const Hello: FC<HelloProps> = ({ label }) => <H1>{label}</H1>;

const H1 = styled.h1`
      font-family: "Tiny5", sans-serif;
      font-weight: 400;
      font-style: normal;
`;

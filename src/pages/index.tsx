import type { HeadFC, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Hello,
  SEO,
} from '../components';

export const IndexPage: FC<PageProps> = () => (
  <Container>
    <GlobalStyles />
    <Hello label="Hemo" />
    <StaticImage style={{ margin: 16, maxHeight: 100 }} objectFit="contain" src="../assets/tofu.png" alt="A dinosaur" />
  </Container>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <SEO title="Homepage" description="Homepage description" />
  </>
);

const GlobalStyles = createGlobalStyle`
    html,body{
      margin: 0;
      padding: 0;
      background: lightgoldenrodyellow;
    }
`;

const Container = styled.div`
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TofuImage = styled(StaticImage);

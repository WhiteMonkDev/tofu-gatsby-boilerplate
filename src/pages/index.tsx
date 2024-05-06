import type { HeadFC, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Hello } from '../components';
import { Header } from '../components/Header';
import { GlobalStyled } from '../styles/globalStyled';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Agenda } from '../components/Agenda/Agenda';
import { Gallery } from '../components/Gallery/Gallery';

export const IndexPage: FC<PageProps> = () => (
  <>
    <GlobalStyled />
    <Header />
    <AboutMe />
    <Agenda />
    <Gallery />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

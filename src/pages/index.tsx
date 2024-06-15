import type { HeadFC, PageProps } from 'gatsby';
import React, { FC } from 'react';
import {
  Hello,
  SEO,
} from '../components';

export const IndexPage: FC<PageProps> = () => (
  <Hello label="Hemo" />
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <SEO title="Homepage" description="Homepage description" />
  </>
);

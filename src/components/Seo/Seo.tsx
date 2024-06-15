import React from 'react';

type SEOProps ={
    title?:string;
    description?:string;
    children?:string
}

export const SEO = ({
  title, description, children,
}:SEOProps) => {
  const seo = {
    title,
    description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

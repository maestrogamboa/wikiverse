import React from 'react';

export const Page = ({page, fetchArticle}) => {

  return <>
    <h3 onClick={() => fetchArticle(page.slug)}>{page.title}</h3>
  </>
} 
	
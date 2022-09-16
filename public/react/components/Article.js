import { tablePaginationClasses } from '@mui/material';
import React from 'react';

export const Article = ({article, fetchList, deleteArticle}) => {
    console.log(article)

  return <>
    <h1>{article.title}</h1>
    <h3>Author: {article.author.name}</h3>
    <h3>Published: {article.author.createdAt}</h3>
    <h3>{article.content}</h3>
    <h3>Tags:<br></br>{article.tags.map((tag, idx) => <h4 key={idx}>{tag.name}</h4>)}</h3>
    <button type='button' onClick={() => deleteArticle(article.slug)}> DELETE</button>
    <button type='button' onClick={() => fetchList()}> Back to Wiki List</button>
  </>
} 
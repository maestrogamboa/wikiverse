import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, fetchArticle, addArticle}) => {
	return <>
		  <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
		{
			pages.map((page, idx) => {
				return <Page page={page} fetchArticle={fetchArticle} key={idx} />
			})
		}
		<button type='button' onClick={() => addArticle()}> add page</button>
	</>
} 

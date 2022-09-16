import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Article} from './Article';
import {Add} from './Add';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const[article, setArticle] = useState(null)
	const [addingArticle, setAddingArticle] = useState(false)
	const[name, setName] = useState('')
	const[content, setContent] = useState('')
	const [title, setTitle] = useState('')
	const [email, setEmail] = useState('')
	const [tags, setTags] = useState('')

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	 async function fetchArticle(slug){
		console.log(slug)
		const res = await fetch(`${apiURL}/wiki/${slug}`)
		const data = await res.json()
		setArticle(data)
	}
	function backToList(){
		setArticle(null)
	}

	async function handleSubmit(){
		const dataToSend = {
			title: title,
			content: content,
			name: name, 
			email: email,
			tags: tags
		};
		const response = await fetch(`${apiURL}/wiki`, {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				dataToSend
			)
		})
		const data = await response.json()
		console.log(data)


	}
	async function deleteArticle(slug){
		const res = await fetch(`${apiURL}/wiki/${slug}`, 
		{method: 'DELETE'})
		const data = await res.json()
		setPages(data)
		setArticle(null)
	}

	function addArticle(){
		setAddingArticle(!addingArticle)
	}

	useEffect(() => {
		fetchPages();
	}, []);

	/*
	if(addingArticle){
		return (
			<Add handleSubmit={handleSubmit} setName={setName} setTitle={setTitle} 
			setContent={setContent} setEmail={setEmail} setTags={setTags}/>
		)
	}
	*/

	return (
		<main>	
			
			{ article ? <Article article={article} fetchList={backToList} deleteArticle={deleteArticle}/> 
			: addingArticle ? <Add handleSubmit={handleSubmit} setName={setName} setTitle={setTitle} 
			setContent={setContent} setEmail={setEmail} setTags={setTags}/> : <PagesList pages={pages} fetchArticle={fetchArticle} addArticle={addArticle}/>}
		</main>
	)
}
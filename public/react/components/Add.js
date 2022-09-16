import React from 'react';

export const Add = ({handleSubmit, setName, setTitle, setEmail, setContent, setTags}) => {

  return <>
  <form className='addArticle' onSubmit={handleSubmit}>
  <h3>Add a Page</h3>
  <div id='inputt'>
  <input onChange={(event) => setTitle(event.target.value)} value={undefined} placeholder='Title'></input>
  <input onChange={(event) => setContent(event.target.value)} value={undefined} placeholder='Article Content'></input>
  <input onChange={(event) => setName(event.target.value)} value={undefined} placeholder='Author Name'></input>
  <input onChange={(event) => setEmail(event.target.value)} value={undefined} placeholder='Author Email'></input>
  <input onChange={(event) => setTags(event.target.value)} value={undefined} placeholder='Tags'></input>
  <button type='submit'>Create Page</button>
  </div>
  </form>
    
  </>
} 
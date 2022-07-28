import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();    
        const newPost = {
            ...post, id: Date.now()
        };        
        create(newPost);
        setPost({title: '', body: ''});
      }

    return (
        <div>
            <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          type='text'
          onChange={event => setPost({...post, title: event.target.value})}
          placeholder='Название поста'
        />
        {/*неуправляемый компонент*/}
        {/* <MyInput 
          ref={bodyInputRef}
          type='text' 
          placeholder='Описание поста'
        /> */}
        <MyInput 
          value={post.body}
          type='text'
          onChange={event => setPost({...post, body: event.target.value})}
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
        </div>
    )
}

export default PostForm;
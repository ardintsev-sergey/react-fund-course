import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../components/API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getByID(id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByID(id);
        setComments(response.data);
    })
    

    useEffect(() => {
      fetchPostById(params.id)
      fetchComments(params.id)
      }, 
    [])
    
    return (
        <div>
            <h1>Страница поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}, {post.title}</div> 
            }
            <h1>Комментарии</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => 
                        <div style={{marginTop: '15px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div> 
            }
            
        </div>
    )
}

export default PostIdPage
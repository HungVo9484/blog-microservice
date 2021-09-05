import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const Styles = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
.card {
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  width: 20%;
  margin-bottom: 1.25rem;
}
.card-body {

}
`;

const PosList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div key={post.id} className='card'>
      <div className='card-body'>
        <h3>{ post.title }</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return <Styles>{renderedPosts}</Styles>;
};

export default PosList;

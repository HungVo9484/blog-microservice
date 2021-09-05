import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`
  .form-group {
    display: flex;
    flex-direction: column;
  }
  .form-group label {
    font-size: 1rem;
    font-weight: bold;
  }
  .form-control {
    height: 2rem;
    margin-top: 1rem;
    font-size: 1rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    margin: 1rem auto 1rem 0;
    border-radius: 8px;
  }
  .btn-primary {
    color: white;
    font: inherit;
    background-color: blueviolet;
  }
`;

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:4001/posts/${postId}/comments`,
        {
          content: comment,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setComment('');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Styles>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            className='form-control'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </Styles>
  );
};

export default CommentCreate;

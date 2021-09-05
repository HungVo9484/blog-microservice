import axios from 'axios';
import { useState } from 'react';
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
    width: 20rem;
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

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/posts', {
        title
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setTitle('')
    } catch (err) {
      console.log(err);
    }
  

  };
  return (
    <Styles>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </Styles>
  );
};

export default PostCreate;

import styled from 'styled-components';

const Styles = styled.div``;

const CommentList = ({ comments }) => {
  const renderedList = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));
  return (
    <Styles>
      <ul>{renderedList}</ul>
    </Styles>
  );
};

export default CommentList;

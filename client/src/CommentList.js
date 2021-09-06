import styled from 'styled-components';

const Styles = styled.div``;

const CommentList = ({ comments }) => {
  const renderedList = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'pending') {
      content = 'this comment is awaiting moderation.';
    }

    if (comment.status === 'rejected') {
      content = 'this comment has been rejected.';
    }
    return <li key={comment.id}>{content}</li>;
  });
  return (
    <Styles>
      <ul>{renderedList}</ul>
    </Styles>
  );
};

export default CommentList;

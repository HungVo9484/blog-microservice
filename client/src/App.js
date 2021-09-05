import styled from "styled-components";

import PostCreate from "./PostCreate";
import PosList from "./PostList";

const Container = styled.div`
max-width: 1200px;
margin: auto;
`;
const App = () => {
  return (
    <Container>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PosList />
    </Container>
   );
}
 
export default App;
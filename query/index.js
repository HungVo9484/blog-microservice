const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

const posts = {};

const eventHandler = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(
      (comment) => comment.id === id
    );
    comment.status = status;
    comment.content = content;
  }
};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  eventHandler(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log('Listening on 4002');
  try {
    const res = await axios.get('http://localhost:4005/events');
    for (const event of res.data) {
      console.log('Processing event:', event.type);

      eventHandler(event.type, event.data)
    }
   } catch (err) {
    console.log(err.message);
  }
});

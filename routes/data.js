const mongoose = require('mongoose');
const Data = mongoose.model('data');

module.exports = app => {
  app.get('/api/allData', async (req, res) => {
    const result = await Data.find().cache({ expire: 10 });

    res.json(result);
    console.log('cached hit');

  });

  app.post('/api/allData', async (req, res) => {
    const { title, author, content } = req.body;

    if (!title || !author || !content) {
      console.log('cache missed');
      return res.status(400).send('Missing title, author, or content')
    }

    const result = new Data({
      title,
      author,
      content
    });

    try {
      await result.save();
      res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  app.put('/api/allData/:id', async (req, res) => {
    const { title, author, content } = req.body;

    if (!title || !author || !content) {
      console.log('cache missed');
      return res.status(400).send('Missing title, author, or content')
    }

    const result = new Data({
      title,
      author,
      content
    });

    try {
      await result.save();
      res.send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  
 
  app.delete('/api/allData/:id', async (req, res) => {
    const { id } = req.params;
  
    const result = Data.findIndex(p => p.id == id);
  
    Data.splice(result, 1);
  
    return res.send();
  });

};
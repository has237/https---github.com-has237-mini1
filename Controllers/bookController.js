const Book = require('../Models/Book');

exports.getAllBooks = (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.addBook = (req, res) => {
  const newBook = new Book(req.body);
  newBook.save()
    .then(() => res.sendStatus(201))
    .catch(err => res.status(500).json({ error: err.message }));
};

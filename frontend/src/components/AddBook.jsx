import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5004/api/books', formData);
      alert('✅ Book added successfully!');
      setFormData({ title: '', author: '', description: '', publishedYear: '' });
    } catch (error) {
      console.error('Error adding book:', error);
      alert('❌ Failed to add book');
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={formData.title} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} value={formData.author} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
        <input type="number" name="publishedYear" placeholder="Published Year" onChange={handleChange} value={formData.publishedYear} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
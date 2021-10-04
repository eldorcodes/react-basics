
import React, {useState} from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';

function App() {
  const [posts, setPosts] = useState([])
  const addNewItem = (data) => {
    console.log('AddNewItem',data);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newItem = {id, ...data}
    setPosts([...posts,newItem])
  }
  const showForm = () => {
    console.log('Display Form');
  }
  
  return (
    <div 
    className="App">

    <Header 
    title="Add New Post"
    showForm={showForm} />

    <AddForm 
    addItem={addNewItem}
     />

     {posts.map((post) => (
       <div key={post.id}>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
         <p>{post.allowComments ? 'Comment is allowed':'Comments Not allowed'}</p>
       </div>
     ))}

    </div>
  );
}

export default App;

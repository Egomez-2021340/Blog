import { useState } from 'react';
import './App.css';
import { Articlelist, ButtonList } from './components';
import data from './data/data';


function App() {

  const allCategories = ['All', ...new Set(data.map(article => article.category))]

  const [categories, setCategories] = useState(allCategories)
  const [articles, setArticles] = useState(data)


const filterCategory = (category) => {
  console.log(category);
}

  return (
    <>
      <div className="title">
        <h1> <span> Blog</span> Basics</h1>
        <img src="https://artificesware.com/images/contenidos/crm-1.png" alt="image-header"/>
      </div>
      <h1>Hola Mundo</h1>

      <ButtonList categories={categories}/>

      <Articlelist articles={articles}/>

    </>
  );
}

export default App
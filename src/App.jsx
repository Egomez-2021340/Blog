import { useState } from 'react';
import './App.css';
import { ArticleList,  } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					<span>Blog</span> Egomez
				</h1>
				<img src="https://artificesware.com/images/contenidos/crm-1.png" alt="image-header"/>
			</div>

			

			<ArticleList articles={articles}/>
		</>
	);
}

export default App;
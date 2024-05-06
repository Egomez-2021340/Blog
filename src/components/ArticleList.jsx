import React from 'react';

export const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        <img src={article.image} alt={article.title} />
                    </div>
                    <div className="article-body">
                        <h2>{article.title}</h2>
                        {/* Modificar la parte de la descripción */}
                        <p>
                            {/* Si la descripción es un objeto, mostrar el hipervínculo */}
                            {typeof article.description === 'object' ? (
                                <a href={article.description.url} target="_blank" rel="noopener noreferrer">
                                    {article.description.text}
                                </a>
                            ) : (
                                // Si no es un objeto, mostrar el texto normal
                                article.description
                            )}
                        </p>
                        <div className="article-footer">
                            <span>{article.ReadingTime}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

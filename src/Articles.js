import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Articles() {
  const { isLoading, articles } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.objectID !== id);
    dispatch({ type: 'remove_article', payload: newArticles });
  };

  if (isLoading) {
    return <div className='loading'></div>;
  }
  return (
    <section className='articles'>
      {articles.map((article) => {
        const { objectID, title, num_comments, url, points, author } = article;
        return (
          <article key={objectID} className='article'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'>
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => {
                  removeArticle(objectID);
                }}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Articles;

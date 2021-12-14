import React from 'react';
import { connect } from 'react-redux';

function Articles({ isLoading, articles, searchTerm }) {
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
              <button className='remove-btn'>remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Articles);

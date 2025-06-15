import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({id, title, content, time }) {
  return (
    <div className="card text-center">
      <div className="card-header">Articles</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      <Link to={`/article/${id}`} className="btn btn-primary">
          Read more
        </Link>
      </div>
      <div className="card-footer text-body-secondary">{time}</div>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 2:00PM"
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today at 10:00AM"
                content="I like the subject"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Taylor"
                timeAgo="Yesterday at 2:00PM"
                content="I like your writing"
                avatar={faker.image.avatar()}
            />
        </div>);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
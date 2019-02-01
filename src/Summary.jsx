import React, { Component } from 'react';

const Summary = ({ todosCount, completedTodosCount }) => (
    <div className="summary__container">
        <p className="summary__text">
            {`${completedTodosCount}/${todosCount} tasks completed`}
        </p>
    </div>
);

export default Summary;
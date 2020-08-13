import React from 'react';

export default function Comment({ name, description }) {
    return (
        <div>
            <p className="comment">Nome: {name}</p>
            <p>{description}</p>
        </div>
    );
} 
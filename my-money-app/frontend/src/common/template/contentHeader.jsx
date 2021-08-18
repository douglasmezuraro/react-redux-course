import React from 'react';

const ContentHeader = ({ title, subtitle }) => (
    <section className='content-header'>
        <h1>
            {title} <small>{subtitle}</small>
        </h1>
    </section>
);

export default ContentHeader;

import './Post.css';
import React, { useState } from 'react';
const Post = ({ heading, subHeading, date }) => {
	return (
		<div className='post'>
			<h2>{heading}</h2>
			<h3>{subHeading}</h3>
			<p className='p'>{date && date.split('T')[0].split('-').reverse().join('-')}</p>
		</div>
	);
};

export default Post;

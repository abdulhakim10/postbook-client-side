import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
    <footer className="px-4 py-8 ">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full">
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 rounded-full dark:text-gray-900">
					<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
				</svg> */}
				<img src='https://img.freepik.com/premium-vector/letter-pb-logo_609277-4795.jpg?w=2000' alt="" />
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<Link rel="noopener noreferrer" to="">Terms of Use</Link>
				</li>
				<li>
					<Link rel="noopener noreferrer" to="">Privacy</Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<Link rel="noopener noreferrer" to="">Instagram</Link>
			</li>
			<li>
				<Link rel="noopener noreferrer" to="">Facebook</Link>
			</li>
			<li>
				<Link rel="noopener noreferrer" to="">Twitter</Link>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;
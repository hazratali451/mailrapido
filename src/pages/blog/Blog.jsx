import React from "react";
import PageHeader from "../../components/PageHeader";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";
import ReadedArticles from "./components/ReadedArticles";
const Blog = () => {
	return (
		<>
			<PageHeader title="Blog" />
			<BlogSection />
			<ReadedArticles />
			<NewsLetter />
		</>
	);
};

export default Blog;

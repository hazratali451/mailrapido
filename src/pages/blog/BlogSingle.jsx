import React from "react";
import PageHeader from "../../components/PageHeader";
import ReadedArticles from "./components/ReadedArticles";

import AlsoLike from "./components/AlsoLike";
import BlogSingleSection from "./components/BlogSingleSection";
const BlogSingle = () => {
	return (
		<>
			<PageHeader subtitle="your software & really enjoy the account fermentum scelerisque lacinia malesuada nunc.Habitant ullamcor setup " />
			<BlogSingleSection />
			<ReadedArticles />
			<AlsoLike />
		</>
	);
};

export default BlogSingle;

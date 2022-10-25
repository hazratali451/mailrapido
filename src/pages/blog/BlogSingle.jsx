import React from "react";
import PageHeader from "../../components/PageHeader";
import ReadedArticles from "./components/ReadedArticles";

import AlsoLike from "./components/AlsoLike";
const BlogSingle = () => {
	return (
		<>
			<PageHeader subtitle="your software & really enjoy the account fermentum scelerisque lacinia malesuada nunc.Habitant ullamcor setup " />

			<section className="blog-single-section pt-120 pb-120">
				<div className="container"></div>
			</section>

			<ReadedArticles />
			<AlsoLike />
		</>
	);
};

export default BlogSingle;

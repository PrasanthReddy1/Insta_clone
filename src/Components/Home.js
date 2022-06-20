import React, { useState } from "react";

import Styles from "./Home.module.css";
import posts from "../data/posts";
import message from "../images/message-square (1).svg";
import { useNavigate } from "react-router";

function Home() {
	const navigate = useNavigate();

	let array = [];
	const increment = (id) => {
		posts.map((post) => {
			if (post.id === id) {
				const likes1 = array.find((arr) => arr.id === id);

				array = array.filter((arr) => arr.id !== id);
				if (likes1?.likes) {
					array.push({
						id,
						likes: 1 + likes1.likes,
					});
				} else {
					array.push({
						id,
						likes: post.likes + 1,
					});
				}
				console.log(array);
			}
		});
	};

	return (
		<div className={Styles.container1}>
			<div className="container p-md-5">
				<div className="row p-md-5">
					{posts.map((post) => (
						<div className="col-md-4" key={post.id}>
							<div className="card m-3">
								<img
									src={post.display_src}
									className="card-img-top"
									alt="Fissure in Sandstone"
									onClick={() => {
										navigate(`/post/comment/${post.code}`);
									}}
								/>

								<div className="card-body">
									<p className="card-title">{post.caption}</p>
									<div className="d-flex pt-2 pb-5">
										{array.length !== 0 ? (
											<span
												className={`btn btn-outline-secondary w-50  ${Styles.btn}`}
												onClick={() => {
													increment(post.id);
												}}
											>
												<i
													className={`fa-solid fa-heart ${Styles.fa_heart}`}
												></i>{" "}
												{array.map((arr) => {
													return arr.id === post.id ? (
														<span key={arr.id}>{arr.likes}</span>
													) : null;
												})}
											</span>
										) : (
											<span
												className={`btn btn-outline-secondary w-50  ${Styles.btn}`}
												onClick={() => {
													increment(post.id);
												}}
											>
												<i
													className={`fa-solid fa-heart ${Styles.fa_heart}`}
												></i>{" "}
												{post.likes}
											</span>
										)}

										<span
											className={`btn btn-outline-secondary w-50 ms-2 ${Styles.btn}`}
										>
											<img src={message} alt="message" />
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./post.module.css";
import posts from "../data/posts";
import message from "../images/message-square (1).svg";
import comment from "../data/comments";

function Post() {
	const { code } = useParams();
	const [post, setPost] = useState("");

	useEffect(() => {
		posts.map((post) => {
			if (post.code === code) {
				setPost(post);
			}
		});
	}, [code]);

	return (
		<div className={Styles.container}>
			<div className={`card border-4 col-md-8 offset-md-2 ${Styles.card1}`}>
				<div className="row m-1">
					<div className="col-md-6">
						<img
							src={post.display_src}
							alt="displayImage"
							height={"550px"}
							width={"450px"}
							className={`mt-2 img-fluid ${Styles.image1}`}
						/>
						<p className="mt-2 ">{post.caption}</p>
						<div className="d-flex pt-2 pb-5 w-75">
							<span className={`btn btn-outline-secondary w-25  ${Styles.btn}`}>
								<i className={`fa-solid fa-heart ${Styles.fa_heart}`}></i> 56
							</span>
							<span
								className={`btn btn-outline-secondary w-25 ms-2 ${Styles.btn}`}
							>
								<img src={message} alt="message" />
							</span>
						</div>
					</div>
					<div className="col-md-6">
						<div className="mt-3">
							<form>
								<div className="mb-3">
									<input
										type="text"
										className={`form-control ${Styles.form_control1} ${Styles.form_input_styling}`}
										placeholder="Author"
									/>
								</div>
								<div className="mb-3">
									<input
										type="text"
										className={`form-control ${Styles.form_control1} ${Styles.form_input_styling}`}
										placeholder="comment"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;

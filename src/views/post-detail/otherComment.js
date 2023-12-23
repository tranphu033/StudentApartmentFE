import "./mComment.css";
import avatarImg from '../../assets/avatar.png'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import dayjs from "dayjs";
import postApi from "../../apis/postApi";

export default function OtherComment({ commentContent }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    const [comment, setComment] = useState(commentContent);
    const user_id = 1

    const handlerOnClickLike = async () => {
        if (localStorage.getItem('user')) {
            const response = await postApi.likeReview({
                userId: user.id,
                reviewId: comment.id
            })
            if (response === "ok") setComment({ ...comment, like_number: comment.like_number + 1, liked_by_current_user: true })
        }
    }
    // const handlerOnClickUnLike = () => {
    //     setComment({ ...comment, like_details: [...comment.like_details.filter(item => item.user_id !== user_id)] })

    // }

    return (
        <div className="other-comment">
            <div className="userInfo">
                <img src={avatarImg} />
                <div>
                    <span className="txt-username">{comment.user.username}</span>
                    <span className="txt-time">{comment.posted_time}</span>
                </div>
            </div>
            <div className="comment-content">
                <p>{comment.content}</p>
            </div>
            <div className="solid-line"><span></span></div>
            <div className="react-container">
                {comment.liked_by_current_user ?
                    <AiFillLike
                        className="like-icon"
                    /> :
                    <AiOutlineLike className="like-icon" onClick={handlerOnClickLike} />
                }
                <span className="like-count">{comment.like_number}</span>
            </div>
        </div>
    )

}
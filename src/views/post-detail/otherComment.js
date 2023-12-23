import "./mComment.css";
import avatarImg from '../../assets/avatar.png'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

export default function OtherComment({commentContent}) {
    const [comment, setComment] = useState(commentContent);
    const user_id = 1

    const handlerOnClickLike = () => {
        setComment({...comment, like_details:[...comment.like_details, {user_id: user_id}]})
    }
    const handlerOnClickUnLike = () => {
        setComment({...comment, like_details:[...comment.like_details.filter(item => item.user_id !==  user_id)]})

    }

    return (
        <div className="other-comment">
            <div className="userInfo">
                <img src={avatarImg} />
                <span className="txt-username">{comment.user_name}</span>
                <span className="txt-time">{comment.time}</span>
            </div>
            <div className="comment-content">
                <p>{comment.content}</p>
            </div>
            <div className="solid-line"><span></span></div>
            <div className="react-container">
                {comment.like_details?.some(item => {
                    return item.user_id === 1
                }) ? 
                <AiFillLike onClick={handlerOnClickUnLike}
                    className="like-icon"
                />:
                <AiOutlineLike className="like-icon" onClick={handlerOnClickLike}/>
                }
                <span className="like-count">{comment.like_details?.length}</span>
            </div>
        </div>
    )

}
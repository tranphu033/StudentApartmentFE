import "./mComment.css";
import avatarImg from '../../assets/avatar.png'
import TextareaAutosize from 'react-textarea-autosize';
import OtherComment from "./otherComment";
import { useEffect, useState } from "react";


export default function Mcomment({listCommentData}){
    const [listComment, setListComment] = useState(listCommentData);
    const [userComment, setUserComment] = useState("");
    const [indexComment, setIndexComment] = useState(3);
    const handlerLoadMoreClick = () => {
        setIndexComment((prev) => prev+3)
        console.log("2" +listComment)
    }
    const submitCommetFunc = () => {
        setIndexComment(3)
        setUserComment('')
        const userCommentData = {
            id: listComment.length,
            user_id: 1,
            post_id: 1,
            user_name: "Chi bi",
            content: userComment,
            like_nums: 0,
            time: "now",
            like_details: [],
        }
        setListComment([userCommentData,...listComment])
        console.log("1" + listComment)
     

    }


    return (
        <div className="post-comment-content">
            <div className="comment-title">
                <h4>Bình luận</h4>
            </div>
            <div className="input-comment">
                <div className="userInfo">
                    <img src={avatarImg}/>
                    <span className="txt-username">Nguyễn Văn A</span>
                </div>
                <TextareaAutosize type="text" className="input-content" placeholder="Something" value={userComment} onChange={(e)=>{console.log(e.target.value); setUserComment(e.target.value)}}/>
                <div className="solid-line"><span></span></div>
                <div className="input-submit" onClick={submitCommetFunc}><span className="btn-submit">Bình luận</span></div>
            </div>
            {(listComment.length > 0 ) ?( 
                <div>
                    <div>
                        {listComment.map((comment,index) => (index < indexComment) &&
                        <OtherComment commentContent={comment} key = {comment.id}
                        />) }
                        {(indexComment < listComment.length) &&
                        <div className="load-more" onClick={handlerLoadMoreClick}>
                            <div className="load-more-btn">Load more ...</div>
                        </div>
                        }
                    </div>
                    
                </div>
                ) : (
                    <p className="txt-noComment">Chưa có bình luận nào</p>
                )
            }
            
        </div>
    )
}
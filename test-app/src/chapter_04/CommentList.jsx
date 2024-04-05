import Comment from "./Comment"
export default function CommentList(props){
    return (
        <div>
            <Comment name="이순신" comment="안녕하세요" />
            <Comment name="홍길동" comment="안녕하세요!" />
            <Comment name="강감찬" comment="안녕하세요!!" />
        </div>
    )
}
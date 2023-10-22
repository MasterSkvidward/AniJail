import React from 'react';
import Title from '../../UI/Title/Title';
import classes from "./Comments.module.scss";

const Comments = () => {
    return (
       <div className={classes["comments"]}>
           <Title value={"Comments"}/>
       </div>
    );
}

export default Comments;
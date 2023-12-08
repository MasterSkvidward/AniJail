export interface IComment {
   id: number;
   parentId: number | null;
   author: string;
   img: string;
   date: string;
   comment: string;
}


// export interface ICommentResponse {
//     id: number;
//     parentId: number | null;
//     author: string;
//     img: string;
//     date: string;
//     comment: string;
//  }
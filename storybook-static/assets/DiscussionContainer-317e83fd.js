import{j as b,F as I,a as r}from"./jsx-runtime-913be41c.js";import{r as d}from"./index-2506bfc3.js";import{C as _}from"./CommentList-9aa93d39.js";import{C as x}from"./CreateComment-e25e73ac.js";import{D}from"./DiscussionTitle-75757833.js";import{F as S}from"./theme-ui-components.esm-600c41e5.js";const v=i=>{const o=[],n={};for(const e of i)if(n[e._id]=e,e.parentCommentId){const t=n[e.parentCommentId];if(!t)continue;t.replies||(t.replies=[]),t.replies.push(e)}for(const e of i)e.parentCommentId||o.push(e);return o},u=i=>{const{comment:o,comments:n,handleDelete:e,handleEdit:t,handleEditRequest:p,onSubmitReply:c,highlightedCommentId:g,maxLength:m,onChange:f,onMoreComments:h,onSubmit:C,isLoggedIn:s,supportReplies:y=!1}=i,[q,a]=d.useState(null),R=d.useMemo(()=>v(n),[n]),V=l=>{if(l===q)return a(null);a(l)};return b(I,{children:[r(D,{length:n.length}),r(_,{supportReplies:y,comments:R,handleDelete:e,handleEdit:t,handleEditRequest:p,highlightedCommentId:g,isLoggedIn:s,isReplies:!1,maxLength:m,onMoreComments:h,onSubmitReply:c,setCommentBeingRepliedTo:V}),r(S,{sx:{alignItems:"stretch",background:"softblue",borderRadius:2,flexDirection:"column",padding:3},children:r(x,{maxLength:m,comment:o,onChange:f,onSubmit:C,isLoggedIn:s})})]})};try{u.displayName="DiscussionContainer",u.__docgenInfo={description:"",displayName:"DiscussionContainer",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"string"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"IComment[]"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},highlightedCommentId:{defaultValue:null,description:"",name:"highlightedCommentId",required:!1,type:{name:"string"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(comment: string) => void"}},onMoreComments:{defaultValue:null,description:"",name:"onMoreComments",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(comment: string) => void"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!0,type:{name:"(_id: string, reply: string) => Promise<void>"}},supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!1,type:{name:"boolean"}}}}}catch{}export{u as D};
//# sourceMappingURL=DiscussionContainer-317e83fd.js.map

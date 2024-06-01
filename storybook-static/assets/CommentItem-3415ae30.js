import{a as e,j as a,F as j}from"./jsx-runtime-913be41c.js";import{r as t}from"./index-2506bfc3.js";import{B as y}from"./Button-aae6b698.js";import{C as F}from"./ConfirmModal-8f4fd5e0.js";import{E as N}from"./EditComment-e33191eb.js";import{L as O}from"./LinkifyText-f6c7c6e0.js";import{M as U}from"./Modal-843dd831.js";import{U as z}from"./Username-d4b4b02e.js";import{B as L,F as i,b as c}from"./theme-ui-components.esm-600c41e5.js";const G=129,P=o=>o?new Date(o).toLocaleDateString("en-GB").replace(/\//g,"-"):"",w=o=>{const n=t.createRef(),[C,s]=t.useState(!1),[g,l]=t.useState(!1),[S,E]=t.useState(0),[d,I]=t.useState(!1),{comment:M,handleDelete:u,handleEditRequest:f,handleEdit:p,isReply:_}=o,{text:h,creatorName:D,creatorCountry:b,isUserVerified:R,isUserSupporter:q,isEditable:v,_created:B,_edited:x,_id:r}=M,T=P(x||B),V=d?"max-content":"128px";t.useEffect(()=>{n.current&&E(n.current.scrollHeight)},[n]);const k=()=>{I(!d)},H=m=>{if(f)return f(m),s(!0)};return e(L,{id:`comment:${r}`,"data-cy":"comment",children:a(i,{sx:{flexDirection:"column"},children:[a(i,{sx:{alignItems:"stretch",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start"},children:[a(i,{sx:{alignItems:"baseline",gap:2},children:[e(z,{user:{userName:D,countryCode:b,isVerified:!!R,isSupporter:!!q}}),x&&e(c,{sx:{fontSize:0,color:"grey"},children:"(Edited)"}),e(c,{sx:{fontSize:1},children:T})]}),e(i,{sx:{flexGrow:1,gap:2,justifyContent:["flex-start","flex-start","flex-end"],opacity:.5,width:["100%","auto"],":hover":{opacity:1}},children:v&&a(j,{children:[e(y,{"data-cy":"CommentItem: edit button",variant:"outline",small:!0,icon:"edit",onClick:()=>H(r),children:"edit"}),e(y,{"data-cy":"CommentItem: delete button",variant:"outline",small:!0,icon:"delete",onClick:()=>l(!0),children:"delete"})]})})]}),e(c,{"data-cy":"comment-text",mt:2,mb:2,sx:{fontFamily:"body",lineHeight:1.3,maxHeight:V,overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word"},ref:n,children:e(O,{children:h})}),S>G&&e("a",{onClick:k,style:{color:"gray",cursor:"pointer",fontSize:"14px"},children:d?"Show less":"Show more"}),e(U,{width:600,isOpen:C,children:e(N,{comment:h,handleSubmit:m=>{p&&p(r,m),s(!1)},handleCancel:()=>s(!1),isReply:_})}),e(F,{isOpen:g,message:"Are you sure you want to delete this comment?",confirmButtonText:"Delete",handleCancel:()=>l(!1),handleConfirm:()=>{u&&u(r),l(!1)}})]})})};try{w.displayName="CommentItem",w.__docgenInfo={description:"",displayName:"CommentItem",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"IComment"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!1,type:{name:"((commentId: string) => Promise<void>)"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!1,type:{name:"((commentId: string, newCommentText: string) => void)"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!1,type:{name:"((commentId: string) => Promise<void>)"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}}}catch{}export{w as C};
//# sourceMappingURL=CommentItem-3415ae30.js.map

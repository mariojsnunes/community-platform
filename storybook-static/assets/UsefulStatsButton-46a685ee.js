import{j as a,F as d,a as s}from"./jsx-runtime-913be41c.js";import{r as c}from"./index-2506bfc3.js";import{B as f}from"./Button-aae6b698.js";import{T as m}from"./Tooltip-60f84766.js";import{u as p}from"./emotion-element-6a883da9.browser.esm-becb4ad2.js";import{a as U}from"./index-150eb7c2.js";import{b as l}from"./theme-ui-components.esm-600c41e5.js";const r=e=>{const t=p(),n=U(),[i,o]=c.useState(),u=async()=>{o(!0);try{await e.onUsefulClick()}catch{}o(!1)};return a(d,{children:[a(f,{"data-tip":e.isLoggedIn?"":"Login to add your vote","data-cy":e.isLoggedIn?"vote-useful":"vote-useful-redirect",onClick:()=>e.isLoggedIn?u():n("/sign-in"),disabled:i,sx:{fontSize:2,backgroundColor:t.colors.white,py:0,"&:hover":{backgroundColor:t.colors.softblue},...e.sx},icon:e.hasUserVotedUseful?"star":"star-active",children:[s(l,{pr:2,py:2,sx:{display:"inline-block"},children:e.votedUsefulCount}),s(l,{pl:2,py:2,sx:{display:"inline-block",borderLeft:`1px solid ${t.colors.black}`},children:e.hasUserVotedUseful?"Marked as useful":"Mark as useful"})]}),s(m,{})]})};try{r.displayName="UsefulStatsButton",r.__docgenInfo={description:"",displayName:"UsefulStatsButton",props:{hasUserVotedUseful:{defaultValue:null,description:"",name:"hasUserVotedUseful",required:!0,type:{name:"boolean"}},votedUsefulCount:{defaultValue:null,description:"",name:"votedUsefulCount",required:!0,type:{name:"number | undefined"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},onUsefulClick:{defaultValue:null,description:"",name:"onUsefulClick",required:!0,type:{name:"() => Promise<void>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{r as U};
//# sourceMappingURL=UsefulStatsButton-46a685ee.js.map

import{r as L,o as a,c as _,a as o,b as T,p as $,d as O,u as b,e as x,f as g,F as q,g as Q,n as P,h as v,t as h,w as R,v as M,i as D,j as A,k as z,l as F,m as j,q as I,s as k,x as H,y as V,z as B,A as G,B as K,C as J}from"./vendor.8f933c98.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};X();var w=(e,t)=>{const s=e.__vccOpts||e;for(const[r,n]of t)s[r]=n;return s};const Y={},W=e=>($("data-v-cf17c268"),e=e(),O(),e),Z={class:"vertical-layout"},ee=W(()=>o("header",null,[o("h1",null,"Trivia")],-1)),te={class:"middle"};function se(e,t){const s=L("router-view");return a(),_("div",Z,[ee,o("main",te,[T(s)])])}var ne=w(Y,[["render",se],["__scopeId","data-v-cf17c268"]]);const N=e=>($("data-v-5745ef4c"),e=e(),O(),e),oe={class:"root"},re=N(()=>o("h2",null,"Trivia",-1)),ie=["onClick"],ce={class:"width-100"},ue=["onClick"],ae=["value"],le=N(()=>o("br",null,null,-1)),de={class:"width-100"},he={setup(e){const t=b(),s=x(),r={any:"Any Category",9:"General Knowledge",10:"Entertainment: Books",11:"Entertainment: Film",12:"Entertainment: Music",13:"Entertainment: Musicals & Theatres",14:"Entertainment: Television",15:"Entertainment: Video Games",16:"Entertainment: Board Games",17:"Science & Nature",18:"Science: Computers",19:"Science: Mathematics",20:"Mythology",21:"Sports",22:"Geography",23:"History",24:"Politics",25:"Art",26:"Celebrities",27:"Animals",28:"Vehicles",29:"Entertainment: Comics",30:"Science: Gadgets",31:"Entertainment: Japanese Anime & Manga",32:"Entertainment: Cartoon & Animations"},n={easy:{name:"Easy",color:"green"},medium:{name:"Medium",color:"yellow"},hard:{name:"Hard",color:"red"}},i=g(t.getters.getQuestionCategory),c=g(t.getters.getUsername),l=()=>{t.commit("setUsername",c),t.commit("setQuestionCategory",i),t.dispatch("fetchApiSessionToken"),t.dispatch("resetQuiz"),s.push({name:"question"})};return(C,S)=>(a(),_("div",oe,[re,o("div",null,[(a(),_(q,null,Q(n,(p,m)=>o("button",{key:m,class:"button",style:P("background-color: "+p.color),onClick:U=>v(t).commit("setQuestionDifficulty",m)},h(p.name),13,ie)),64))]),o("div",ce,[(a(),_(q,null,Q([5,10,15,20,25],p=>o("button",{class:"button",key:p,onClick:m=>v(t).commit("setQuestionsSelected",p)},h(p),9,ue)),64))]),R(o("select",{class:"input","onUpdate:modelValue":S[0]||(S[0]=p=>i.value=p)},[(a(),_(q,null,Q(r,(p,m)=>o("option",{key:m,value:m},h(p),9,ae)),64))],512),[[M,i.value]]),le,o("div",de,[R(o("input",{class:"input","onUpdate:modelValue":S[1]||(S[1]=p=>c.value=p),type:"text",placeholder:"Username"},null,512),[[D,c.value]]),o("button",{class:"button",type:"button",onClick:l},"Start")])]))}};var _e=w(he,[["__scopeId","data-v-5745ef4c"]]);const pe={setup(e){return(t,s)=>(a(),A(_e))}},me={},fe=o("h1",null,"404",-1),ge=o("p",null,"Page not found",-1),ve=F("Click here if you wish to start a Trivia game");function ye(e,t){const s=L("router-link");return a(),_("section",null,[fe,ge,T(s,{to:{name:"start"}},{default:z(()=>[ve]),_:1})])}var qe=w(me,[["render",ye]]);const we={class:"question-area"},Ce={class:"question-title"},Se={class:"question-x-of-y"},be={class:"button-area"},ke={props:{question:{type:Object,required:!0}},setup(e){const t=e,s=b(),r=x(),n=g(s.getters.getNumberOfQuestions),i=g("True"),c=g("False"),l=g("Choice 3"),C=g("Choice 4"),S=()=>{const d=[];d.push(t.question.correct_answer),d.push(t.question.incorrect_answers[0]),d.push(t.question.incorrect_answers[1]),d.push(t.question.incorrect_answers[2]);const u=p(d);i.value=u[0],c.value=u[1],l.value=u[2],C.value=u[3],console.log("Coices randomized")},p=d=>{let u=d.length,y;for(;u!=0;)y=Math.floor(Math.random()*u),u--,[d[u],d[y]]=[d[y],d[u]];return d},m=d=>{s.commit("submitAnswer",{question:t.question.question,correct_answer:t.question.correct_answer,answer:d,number:t.question.number}),s.commit("hideCurrentQuestion"),U()},U=()=>{s.commit("increaseIndexOfCurrentQuestion");const d=s.getters.getIndexOfCurrentQuestion,u=s.getters.getNumberOfQuestions;d<u?s.commit("showCurrentQuestion"):s.dispatch("submitScore").then(()=>r.push({name:"result"}))};return j(()=>{s.commit("setNumberOfQuestions"),n.value=s.getters.getNumberOfQuestions,t.question.type==="multiple"&&S()}),(d,u)=>(a(),_(q,null,[o("div",we,[o("h2",Ce,h(e.question.question),1),o("p",Se,"Question: "+h(e.question.number)+"/"+h(n.value),1)]),o("div",be,[o("button",{class:"choice choice1",onClick:u[0]||(u[0]=y=>m(i.value))},h(i.value),1),o("button",{class:"choice choice2",onClick:u[1]||(u[1]=y=>m(c.value))},h(c.value),1),e.question.type==="multiple"?(a(),_("button",{key:0,class:"choice choice3",onClick:u[2]||(u[2]=y=>m(l.value))},h(l.value),1)):I("",!0),e.question.type==="multiple"?(a(),_("button",{key:1,class:"choice choice4",onClick:u[3]||(u[3]=y=>m(C.value))},h(C.value),1)):I("",!0)])],64))}};var Qe=w(ke,[["__scopeId","data-v-3abae0c4"]]);const xe=o("h1",null,"Question",-1),Te={setup(e){const t=b(),s=x(),r=k(()=>t.state.questions);return t.getters.getIsUserRegistered||s.push({name:"start"}),(n,i)=>(a(),_(q,null,[xe,(a(!0),_(q,null,Q(v(r),c=>(a(),_("div",{key:c.question},[c.show_question?(a(),A(Qe,{key:0,question:c},null,8,["question"])):I("",!0)]))),128))],64))}};const $e={class:"left"},Oe={class:"textfield question-number"},Ae={class:"right"},Ie={class:"textfield question"},Ee={class:"textfield user-answer"},Ue={class:"textfield answer"},Le={props:{question:{type:Object,required:!0},questionIndex:{type:Number,required:!0}},setup(e){const t=e,s=b(),r=k(()=>s.getters.getAnswers);let n=g(" ");const i=g(" ");if(t.question.number<=r.value.length){const l=t.question.number-1;n.value=r.value[l].answer,i.value=t.question.correct_answer}const c=k(()=>t.question.correct_answer===n.value);return(l,C)=>(a(),_("li",{class:H(v(c)?"correct-answer":"wrong-answer")},[o("div",$e,[o("p",Oe,h(e.questionIndex+1),1)]),o("div",Ae,[o("p",Ie,h(e.question.question),1),o("p",Ee,"Your answer: "+h(v(n)),1),o("p",Ue,"Correct answer: "+h(i.value),1)])],2))}};var Re=w(Le,[["__scopeId","data-v-5090cace"]]);const Ne={setup(e){const t=b(),s=k(()=>t.state.questions);return k(()=>t.state.answers),(r,n)=>(a(),_("ol",null,[(a(!0),_(q,null,Q(v(s),(i,c)=>(a(),A(Re,{key:c,questionIndex:c,question:i},null,8,["questionIndex","question"]))),128))]))}};var Pe=w(Ne,[["__scopeId","data-v-2e4e3438"]]);const Me=e=>($("data-v-787cb890"),e=e(),O(),e),De={class:"container"},ze={class:"result-and-score"},Fe=Me(()=>o("h2",null,"Results",-1)),je={class:"final-score"},He={setup(e){const t=b(),s=x(),r=k(()=>t.state.questions);let n=V({highScore:0,localScore:t.getters.getLocalScore});const i=()=>{s.push({name:"start"}).catch(l=>console.error("Error on homeClicked! Error: ",l))},c=()=>{s.push({name:"question"}).then(()=>t.dispatch("resetQuiz")).catch(l=>console.error("Error on playAgainClicked! Error: ",l))};return t.dispatch("fetchHighscore").then(l=>Math.max(l,n.localScore)).then(l=>n.highScore=l),t.getters.getIsUserRegistered||s.push({name:"start"}),(l,C)=>(a(),_("section",De,[o("div",ze,[Fe,o("p",je,"Final score: "+h(v(n).localScore)+"/"+h(v(r).length*10)+" - High score: "+h(v(n).highScore),1)]),T(Pe),o("div",{class:"buttons"},[o("button",{onClick:i},"Home"),o("button",{onClick:c},"Play again")])]))}};var Ve=w(He,[["__scopeId","data-v-787cb890"]]);const Be=[{name:"start",path:"/",component:pe},{name:"question",path:"/question",component:Te},{name:"result",path:"/result",component:Ve},{name:"not-found",path:"/:catchAll(.*)",component:qe}];var Ge=B({history:G({}.VITE_BASE_PUBLIC_PATH),routes:Be});function E(e){var t=new DOMParser().parseFromString(e,"text/html");return t.documentElement.textContent}const f=K({state:{username:"",questionsSelected:10,questionDifficulty:"any",questionType:"any",questionCategory:"any",apiUrlPath:"https://opentdb.com/api.php",triviaURL:"https://jorgsaa-noroff-assignment-api.herokuapp.com/trivia",triviaToken:"uEzYwhrkm0OmaPQRfHSqz2OsKL8nsxK3AiqVkJkPjCv2lbiLnDyDkzOCGMm1A1gG",apiSessionToken:"",questions:[],indexOfCurrentQuestion:0,numberOfQuestions:0,answers:[]},mutations:{setUsername:(e,t)=>{e.username=t},setQuestionsSelected:(e,t)=>{e.questionsSelected=t},setQuestionDifficulty:(e,t)=>{e.questionDifficulty=t},setQuestionType:(e,t)=>{e.questionType=t},setQuestionCategory:(e,t)=>{e.questionCategory=t},setQuestions:(e,t)=>{e.questions=t},setIndexOfCurrentQuestion:(e,t)=>{e.indexOfCurrentQuestion=t},setNumberOfQuestions:e=>{e.numberOfQuestions=e.questions.length},addQuestion:(e,t)=>{e.questions.push(t)},deleteQuestion:(e,t)=>{const s=e.questions.indexOf(t);e.questions.splice(s,1)},emptyQuestions:e=>{e.questions.length=0},submitAnswer:(e,t)=>{e.answers.push(t)},deleteAnswer:(e,t)=>{const s=e.answers.indexOf(t);e.answers.splice(s,1)},emptyAnswers:e=>{e.answers.length=0},setApiSessionToken:(e,t)=>{e.apiSessionToken=t},increaseIndexOfCurrentQuestion:e=>{e.indexOfCurrentQuestion++},showCurrentQuestion:e=>{f.state.questions[e.indexOfCurrentQuestion].show_question=!0},hideCurrentQuestion:e=>{f.state.questions[e.indexOfCurrentQuestion].show_question=!1}},getters:{getUsername:e=>e.username,getQuestionsSelected:e=>e.questionsSelected,getQuestionDifficulty:e=>e.questionDifficulty,getQuestionType:e=>e.questionType,getQuestionCategory:e=>e.questionCategory,getApiUrl:e=>e.apiUrlPath+`?&amount=${e.questionsSelected}`+(e.questionCategory!=="any"?`&category=${e.questionCategory}`:"")+(e.questionDifficulty!=="any"?`&difficulty=${e.questionDifficulty}`:"")+(e.questionType!=="any"?`&type=${e.questionType}`:"")+(e.apiSessionToken.length!=0?`&token=${e.apiSessionToken}`:""),getTriviaURL:e=>e.triviaURL,getTriviaToken:e=>e.triviaToken,getApiSessionToken:e=>e.apiSessionToken,getNumberOfQuestions:e=>e.numberOfQuestions,getIndexOfCurrentQuestion:e=>e.indexOfCurrentQuestion,getLocalScore:e=>{const t=(s,r)=>s+(r.answer===r.correct_answer?10:0);return e.answers.reduce(t,0)},getIsUserRegistered:e=>e.username!=="",getAnswers:e=>e.answers},actions:{fetchApiSessionToken(e){if(e.getters.getApiSessionToken.length===0)return fetch("https://opentdb.com/api_token.php?command=request").then(t=>t.json()).then(t=>{e.commit("setApiSessionToken",t.token)}).catch(t=>console.log("Failed to fetch api session token! Error: "+t))},fetchQuestions(e){return fetch(e.getters.getApiUrl).then(t=>t.json()).then(t=>{t.results.forEach((s,r)=>{r===0?(s.show_question=!0,s.number=(r+1).toString()):(s.show_question=!1,s.number=(r+1).toString())}),t.results.forEach(s=>{s.question=E(s.question),s.correct_answer=E(s.correct_answer),s.incorrect_answers.map(r=>E(r))}),e.commit("setQuestions",t.results)}).catch(t=>console.log("Failed to fetch questions! Error: "+t))},resetQuiz(e){e.commit("emptyAnswers"),e.dispatch("fetchQuestions"),e.commit("setIndexOfCurrentQuestion",0)},fetchUsers(e){return fetch(`${f.getters.getTriviaURL}?username=${f.getters.getUsername}`).then(t=>t.json())},usernameExists(e){return f.dispatch("fetchUsers").then(t=>t.length!==0)},fetchHighscore(e){return f.dispatch("fetchUsers").then(t=>t[0]).then(t=>t?t.highScore:0)},submitScore(e){f.dispatch("usernameExists").then(t=>{if(t)f.dispatch("fetchUsers").then(s=>{const r=s[0];if(!(r.highScore>e.getters.getLocalScore))return fetch(`${f.getters.getTriviaURL}/${r.id}`,{method:"PATCH",headers:{"X-API-Key":e.getters.getTriviaToken,"Content-Type":"application/json"},body:JSON.stringify({highScore:e.getters.getLocalScore})}).catch(n=>console.log("Failed to update score! Error: "+n))});else return fetch(f.getters.getTriviaURL,{method:"POST",headers:{"X-API-Key":e.getters.getTriviaToken,"Content-Type":"application/json"},body:JSON.stringify({username:e.getters.getUsername,highScore:e.getters.getLocalScore})}).catch(s=>console.log("Failed to submit score! Error: "+s))})}}});J(ne).use(f).use(Ge).mount("#app");

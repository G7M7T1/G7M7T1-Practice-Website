import{g as s}from"./vendor.2331be84.js";const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};c();const l=s.timeline({repeat:3,yoyo:!0,defaults:{ease:"back"}});l.from("#demo",{opacity:0},2).from("h1",{x:80,opacity:0}).from("h2",{x:-80,opacity:0}).from("p",{y:30,opacity:0}).from("button",{y:30,opacity:0}).from("#items > g",{scale:0,stagger:.2,opacity:0,transformOrigin:"50% 50%"});

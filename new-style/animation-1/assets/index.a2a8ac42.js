import{g as l}from"./vendor.2331be84.js";const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};c();const u=document.querySelectorAll(".item");l.defaults({duration:.3});u.forEach(function(r,o){const n=l.timeline({paused:!0}).to(r.querySelector(".text"),{color:"white",x:10}).to(r.querySelector(".dot"),{backgroundColor:"#F93",scale:1.5},0);r.addEventListener("mouseenter",()=>n.play()),r.addEventListener("mouseleave",()=>n.reverse())});

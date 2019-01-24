"use strict";var nameInput=document.getElementById("subscriber-name"),emailInput=document.getElementById("subscriber-email"),subscribeBtn=document.getElementById("subscribe-button"),nameInputError=document.getElementById("name-input-error"),emailInputError=document.getElementById("email-input-error"),subscribeContainer=document.getElementById("subscribe-container"),subscribeSuccessContainer=document.getElementById("subscribed-feedback"),alreadySubscribedContainer=document.getElementById("already-subscribed-feedback"),blocked=!1;function disableForm(){blocked=!0,nameInput.disabled=!0,emailInput.disabled=!0}function enableForm(){blocked=!1,nameInput.disabled=!1,emailInput.disabled=!1}function resetForm(){nameInput.value="",emailInput.value=""}function validateEmail(e){var n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLocaleLowerCase());return n||emailInputError.classList.add("show-input-error"),n}function validateName(e){var n=2<=e.length&&e.length<100;return n||nameInputError.classList.add("show-input-error"),n}function httpRequest(e,n,t,a,r){var s=new XMLHttpRequest;return s.open(e,SERVICE_URL+n,!0),s.setRequestHeader("Content-type","application/json"),s.setRequestHeader("Accept","application/json"),s.onload=function(){console.log(s.responseText);var e=JSON.parse(s.responseText);e.success?a&&a(e):r&&r(e.message)},t?s.send(JSON.stringify(t)):s.send(),s}subscribeBtn.addEventListener("click",function(){if(!blocked){disableForm();var e=nameInput.value,n=emailInput.value;validateName(e)&&validateEmail(n)?httpRequest("POST","/subscribe",{name:e,email:n},function(e){console.info(e),subscribeContainer.style.display="none",subscribeSuccessContainer.style.display="block"},function(e){console.warn(e),subscribeContainer.style.display="none",alreadySubscribedContainer.style.display="block"}):enableForm()}}),nameInput.addEventListener("focus",function(){return nameInputError.classList.remove("show-input-error")}),emailInput.addEventListener("focus",function(){return emailInputError.classList.remove("show-input-error")});
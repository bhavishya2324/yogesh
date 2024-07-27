import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import blender from '/public/svg/skills/blender.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import fastify from '/public/svg/skills/fastify.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gcp from '/public/svg/skills/gcp.svg';
import gimp from '/public/svg/skills/gimp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import haxe from '/public/svg/skills/haxe.svg';
import html from '/public/svg/skills/html.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import julia from '/public/svg/skills/julia.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import memsql from '/public/svg/skills/memsql.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import php from '/public/svg/skills/php.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import selenium from '/public/svg/skills/selenium.svg';
import sketch from '/public/svg/skills/sketch.svg';
import strapi from '/public/svg/skills/strapi.svg';
import svelte from '/public/svg/skills/svelte.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import penssyalvania from '/public/svg/skills/pennsylvania-panthers.svg';
import typescript from '/public/svg/skills/typescript.svg';
import unity from '/public/svg/skills/unity.svg';
import hitman from '/public/svg/skills/hitman-1.svg';
import vue from '/public/svg/skills/vue.svg';
import google from '/public/svg/skills/google-ads-2.svg';
import webix from '/public/svg/skills/webix.svg';
import wolframalpha from '/public/svg/skills/wolframalpha.svg';
import wordpress from '/public/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'hitman':
      return hitman;
   
 
    case 'google':
      return google;
   
    case 'adobe xd':
      return adobeXd;
  
   

 
  
  
    case 'penssal':
      return penssyalvania;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;

  
 

  

    case 'aws':
      return aws;
   
   
  
    case 'lightroom':
      return lightroom;
  
     
     
    case 'opencv':
      return opencv;

  
    case 'selenium':
      return selenium;

   
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
 
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
 
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
 
    case 'MS office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}

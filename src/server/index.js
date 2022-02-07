/* eslint-disable security/detect-non-literal-require, security/detect-non-literal-fs-filename */

import App from "../App/App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp("src");

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use("/assets", express.static(`${appSrc}/assets`))
  .get("/*", (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(`
        <!doctype html>
         <html lang="en">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>Online Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="preload stylesheet" href="${assets.client.css}">`
                : ""
            }
            ${
              process.env.NODE_ENV === "production"
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
            <meta name="theme-color" content="#000000">
            <meta name="msapplication-TileColor" content="#000000">
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">

            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
            <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
            <link rel="manifest" href="/manifest.json">

            <meta property="og:title" content="Online Portfolio" />
            <meta property="og:image" content="/preview.png" />
            <meta property="og:description" content="This Page is made to showcase Anthony Veaudry's best web projects." />
            <meta name="Description" content="This Page is made to showcase Anthony Veaudry's best web projects.">

          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    }
  });

export default server;

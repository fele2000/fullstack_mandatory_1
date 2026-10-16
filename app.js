import express from "express";

const app = express();

app.use(express.static("public"));

import {
  frontpagePage,
  introductionPage,
  firstServerPage,
  loopMethodsPage,
  htmlAndTimePage,
  exportImportPage,
  clientServerAndEnvVarPage,
  serverSideRenderingPage,
} from "./templatingEngine/pages.js";

// =====================================================================
// Pages
// =====================================================================
app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/01_introduction", (req, res) => {
  res.send(introductionPage);
});

app.get("/02_first_server", (req, res) => {
  res.send(firstServerPage);
});

app.get("/03_loop_methods", (req, res) => {
  res.send(loopMethodsPage);
});

app.get("/04_html_time", (req, res) => {
  res.send(htmlAndTimePage);
});

app.get("/05_export_import", (req, res) => {
  res.send(exportImportPage);
});

app.get("/06_client_server_variables", (req, res) => {
  res.send(clientServerAndEnvVarPage);
});

app.get("/07_server_side_rendering", (req, res) => {
  res.send(serverSideRenderingPage);
});

// =====================================================================
// Server Start
// =====================================================================

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }

  console.log("server is running on", server.address().port);
});

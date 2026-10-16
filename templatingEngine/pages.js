import { constructPage, readPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/frontpage.html");
const introduction = readPage(
  "public/pages/01_introduction/01_introduction.html",
);
const firstServer = readPage("public/pages/02_firstServer/02_firstServer.html");
const loopMethods = readPage("public/pages/03_loopMethods/03_loopMethods.html");
const htmlAndTime = readPage("public/pages/04_htmlAndTime/04_htmlAndTime.html");
const exportImport = readPage(
  "public/pages/05_exportImport/05_exportImport.html",
);
const clientServerAndEnvVar = readPage(
  "public/pages/06_clientServerAndEnvVar/06_clientServerAndEnvVar.html",
);
const serverSideRendering = readPage(
  "public/pages/07_serverSideRendering/07_serverSideRendering.html",
);

export const frontpagePage = constructPage(frontpage, {
  tabTitle: "Frontpage",
});

export const introductionPage = constructPage(introduction, {
  tabTitle: "01 Introduction",
  activePath: "/01_introduction",
});

export const firstServerPage = constructPage(firstServer, {
  tabTitle: "02 First Server",
  activePath: "/02_first_server",
});

export const loopMethodsPage = constructPage(loopMethods, {
  tabTitle: "03 Loop Methods",
  activePath: "/03_loop_methods",
});

export const htmlAndTimePage = constructPage(htmlAndTime, {
  tabTitle: "04 HTML and Time",
  activePath: "/04_html_time",
});

export const exportImportPage = constructPage(exportImport, {
  tabTitle: "05 Export / Import",
  activePath: "/05_export_import",
});

export const clientServerAndEnvVarPage = constructPage(clientServerAndEnvVar, {
  tabTitle: "06 Client / Server || Env-var",
  activePath: "/06_client_server_variables",
});

export const serverSideRenderingPage = constructPage(serverSideRendering, {
  tabTitle: "07 Server Side Rendering",
  activePath: "/07_server_side_rendering",
});

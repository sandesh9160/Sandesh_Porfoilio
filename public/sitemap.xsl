<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>Sitemap | Sandesh Kenchugundi Portfolio</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            margin: 0;
            padding: 32px 24px;
            background-color: #ffffff;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          h1 {
            color: #0f172a;
            margin: 0 0 20px 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            border-left: 1px solid #e2e8f0;
            border-right: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
          }
          thead tr {
            background-color: #0c1726;
          }
          th {
            color: #ffffff;
            text-align: left;
            padding: 12px 16px;
            font-size: 14px;
            font-weight: 600;
          }
          td {
            padding: 12px 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 14px;
            color: #334155;
          }
          tbody tr:hover {
            background-color: #f8fafc;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sitemap</h1>
          <table>
            <thead>
              <tr>
                <th style="width: 75%">URL</th>
                <th style="width: 25%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url | sitemap:sitemapindex/sitemap:sitemap">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

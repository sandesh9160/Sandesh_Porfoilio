<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Sandesh Kenchugundi Portfolio</title>
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
            background-color: #f8fafc;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            padding: 32px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          h1 {
            color: #0f172a;
            margin: 0 0 8px 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          p.desc {
            color: #64748b;
            font-size: 14px;
            margin: 0 0 24px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
          }
          thead tr {
            background-color: #0f172a;
          }
          th {
            color: #ffffff;
            text-align: left;
            padding: 12px 16px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 14px 16px;
            border-top: 1px solid #e2e8f0;
            font-size: 14px;
            color: #334155;
          }
          tbody tr:hover {
            background-color: #f1f5f9;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            background: #e0f2fe;
            color: #0369a1;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="desc">
            Standard XML Sitemap for <strong>Sandesh Kenchugundi | Python Full Stack Developer Portfolio</strong>.
          </p>
          <table>
            <thead>
              <tr>
                <th style="width: 55%">URL</th>
                <th style="width: 15%">Priority</th>
                <th style="width: 15%">Change Frequency</th>
                <th style="width: 15%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
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
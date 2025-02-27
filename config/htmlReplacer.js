import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

export async function htmlReplacer() {
  let config;

  return {
    name: 'htmlReplacer',
    enforce: 'post',
    configResolved(resolvedConfig) {
        config = resolvedConfig;
    },
    transformIndexHtml() {
      const htmlDir = path.resolve(__dirname, "../dist");
      const files = fs.readdirSync(htmlDir);
    
      for (const file of files) {
        if (file.endsWith(".html")) {
          const filePath = path.join(htmlDir, file);
          let html = fs.readFileSync(filePath, "utf-8");
          
          return html.replaceAll('/assets', 'assets');
        }
      }
    }
  }
}
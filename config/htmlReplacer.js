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
    transform() {
      const htmlDir = path.resolve(__dirname, "../dist");
      const files = fs.readdirSync(htmlDir);
    
      for (const file of files) {
        if (file.endsWith(".html")) {
          const filePath = path.join(htmlDir, file);
          let html = fs.readFileSync(filePath, "utf-8");
          const $ = cheerio.load(html);
    
          $('script').each((i, el)=>{
            const elem = $(el);
            let src = elem.attr("src");
            if (src.includes('/assets')) {
              src = src.replace('/assets', 'assets');
              elem.attr("src", src);
            }
          })
          $('link').each((i, el)=>{
            const elem = $(el);
            let src = elem.attr("href");
            if (src.includes('/assets')) {
              src = src.replace('/assets', 'assets');
              elem.attr("href", src);
            }
          })
    
          // Сохраняем измененный HTML
          fs.writeFileSync(filePath, $.html());
        }
      }
    }
  }
}
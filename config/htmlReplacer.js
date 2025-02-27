import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

export async function htmlReplacer() {
  let config;

  const transformIndexHtml = (html) => {
    return html.replaceAll('/assets', 'assets');
  }

  return {
    name: 'htmlReplacer',
    enforce: 'post',
    configResolved(resolvedConfig) {
        config = resolvedConfig;
    },
    transform(source) {
        return { code: transformIndexHtml(source), map: undefined };
    },
    transformIndexHtml
  }
}
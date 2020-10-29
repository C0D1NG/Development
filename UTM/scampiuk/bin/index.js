#!/usr/bin/env node
const buildUrl = require('build-url')
const yargs = require("yargs");
const options = yargs
  .usage("Usage: -d <domain> -p <path> -s <source> -m <medium> -c <campaign> -t <term> -o <content>")
  .option("d", { alias: "domain", describe: "Domain name, including protocol, e.g. https://www.example.com", type: "string", demandOption: true })
  .option("p", { alias: "path", describe: "Path in the url, e.g. /path/to/my/page", type: "string", demandOption: false })
  .option("s", { alias: "source", describe: "The referrer, e.g. google , newsletter", type: "string", demandOption: true })
  .option("m", { alias: "medium", describe: "The medium, e.g. cpc, banner, email", type: "string", demandOption: true })
  .option("c", { alias: "campaign", describe: "The campaign, e.g. 'spring sale'", type: "string", demandOption: true })
  .option("t", { alias: "term", describe: "The term, for identifying paid keywords", type: "string", demandOption: false })
  .option("o", { alias: "content", describe: "The campaign content for identifying different ads", type: "string", demandOption: false })
  .argv;

const url = buildUrl(options.domain, {
  path: options.path,
  queryParams: {
    utm_source: options.source,
    utm_medium: options.medium,
    utm_campaign: options.campaign,
    utm_term: options.term,
    utm_content: options.content,
  }
}, )

console.log(url)

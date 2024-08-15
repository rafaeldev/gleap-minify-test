#!/usr/bin/env node

import * as esbuild from "esbuild";
import dotenv from "dotenv";
import rails from "esbuild-rails";

dotenv.config({
  path: [
    '.env',
    `.env.${process.env.ENV}`,
    `.env.${process.env.ENV}.local`,
  ],
  override: true,
});

esbuild.build({
  entryPoints: ['gleap.js', 'application.js'],
  bundle: true,
  minify: true,
  outdir: 'builds',
  plugins: [rails()],
  sourcemap: false,
  define: {
    "process.env": JSON.stringify({ 
      "INDEX": 10, 
      "COLOR": process.env.COLOR,
      "GLEAP_API_KEY": process.env.GLEAP_API_KEY,
    }),
  },
}).catch(() => process.exit(1));

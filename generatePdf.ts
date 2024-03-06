import puppeteer from "puppeteer";
import fs from "fs/promises";
import os from "node:os";
import { $ } from "bun";
import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    dist: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

export const generatePdf = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("http://localhost:3000/resume", {
    waitUntil: "networkidle0",
  });

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const pdf = await page.pdf({ format: "A4" });

  await browser.close();

  const dist = values.dist || `${__dirname}/resume.pdf`;

  await fs.writeFile(dist, pdf);

  if (os.platform() === "win32") {
    await $`start ${dist}`;
  }

  if (os.platform() === "darwin") {
    await $`open ${dist}`;
  }

  if (os.platform() === "linux") {
    await $`xdg-open ${dist}`;
  }

  console.log(`PDF saved to ${dist}`);
};

generatePdf();

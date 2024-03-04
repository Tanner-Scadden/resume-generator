import puppeteer from "puppeteer";
import fs from "fs/promises";

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

  await fs.writeFile("./resume.pdf", pdf);

  console.log("Done");
};

generatePdf();

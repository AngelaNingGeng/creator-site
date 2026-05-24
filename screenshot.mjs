import { chromium } from 'playwright';

const pages = [
  { name: '01-home', url: 'http://localhost:3000/', fullPage: true },
  { name: '02-works', url: 'http://localhost:3000/works', fullPage: true },
  { name: '03-about', url: 'http://localhost:3000/about', fullPage: true },
  { name: '04-contact', url: 'http://localhost:3000/contact', fullPage: true },
  { name: '05-work-detail', url: 'http://localhost:3000/works/summer-dance-challenge', fullPage: true },
  { name: '06-mobile-home', url: 'http://localhost:3000/', width: 390, height: 844 },
];

const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
});

for (const page of pages) {
  console.log(`Screenshot: ${page.name}`);
  const ctx = await browser.newContext({
    viewport: page.width ? { width: page.width, height: page.height } : { width: 1440, height: 900 },
  });
  const p = await ctx.newPage();
  await p.goto(page.url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(500);
  const path = `screenshots/${page.name}.png`;
  await p.screenshot({ path, fullPage: page.fullPage ?? false });
  console.log(`  Saved: ${path}`);
  await ctx.close();
}

await browser.close();
console.log('All done!');

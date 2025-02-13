import puppeteer from 'puppeteer';
import fs from 'fs';

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // get all categories
  const baseUrl = `https://katalog.tecline.com.pl/en/`;
  await page.goto(baseUrl);
  const categories = await page.evaluate(() => {
    const cats = document.querySelectorAll('.menu-3012 .dropdown-menu li a');
    return Array.from(cats).map((cat) => {
      const url = cat.getAttribute('href');
      const label = cat.textContent;

      return {
        url,
        label,
        parent: null,
      };
    });
  })
  console.log('Main Categories', categories.length);
  const allCategories = [];
  // get SUB Categories
  for (let i = 0; i < categories.length; i++) {

    const cat = categories[i];
    const url = `${baseUrl}${cat.url}`;
    await page.goto(url);

    let subs = await page.evaluate(() => {
      const childs = document.querySelectorAll('#main-content .menu>li');
      return Array.from(childs).filter((v, i) => i>1).map((li) => {
        const a = li.querySelector('a');
        const url = a.getAttribute('href');
        const label = a.textContent;
        const dropdownMenu = li.querySelectorAll('.dropdown-menu a');
        const dropdowns = Array.from(dropdownMenu).map((a) => {
          const u = a.getAttribute('href');
          const l = a.textContent;
          return {
            url: u,
            label: l,
            parent: url
          };
        });
        return [
          {
            url,
            label,
          },
          ...dropdowns
        ];
      }).flat();
    })
    subs.flat().forEach(s => {
      if(!s.parent) {
        s.parent = cat.url
      }
    })
    allCategories.push(cat, ...subs);
  }
  console.log('All Categories count:',allCategories.length)

  // save all categories
  fs.writeFileSync('public/categories.json', JSON.stringify(allCategories, null, 2));

  await browser.close();
};

scrape();
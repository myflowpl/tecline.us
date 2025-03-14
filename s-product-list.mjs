import puppeteer from 'puppeteer';
import fs from 'fs';

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const baseUrl = `https://katalog.tecline.com.pl/en/`;

  const categoriesStr = fs.readFileSync('public/categories.json');
  let categories = [];
  try {
    categories = JSON.parse(categoriesStr);
  } catch (error) {
    console.log('Parse File ERROR', error)
  }

  const allProducts = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    console.log('Category', category.label)
    let currentPage = 1;
    let maxPages = 1;
    while (currentPage <= maxPages) {
      const url = `${category.url}?pageId=${currentPage}`;

      const response = await page.goto(baseUrl+url);

      if(response.status() !== 200) {
        console.log('RESPONSE ERROR', 'status code', response.status(), url )
        break;
      }

      // pages count
      if(maxPages === 1) {
        maxPages = await page.evaluate(() => {
          const list = document.querySelectorAll('ul.pagination a');
          const pages = Array.from(list).map((a) => {
            const p = a.getAttribute('href').split('pageId')[1] || '0';
            return parseInt(p.replace('=', ''), 10);
          });
          return pages.length ? Math.max(...pages) : 1;
        });
      }
      // products
      const products = await page.evaluate(() => {
        const q = (query) => document.querySelector(query);
        const qa = (query) => Array.from(document.querySelectorAll(query));

        const list = qa('.products .product');
        return list.map((product) => {
          const data = product.querySelector('.product-image img')?.getAttribute('data-src') || null;
          const src = product.querySelector('.product-image img')?.getAttribute('src') || null;
          const photoSrc = data || src;
          const photoAlt = product.querySelector('.product-image img')?.getAttribute('alt') || null;
          const url = product.querySelector('.product-name a').getAttribute('href');
          const title = product.querySelector('.product-name a').textContent;
          const code = product.querySelector('.product-desc .code strong').textContent;
          const price = product.querySelector('.product-price').textContent.split(' ')[0] || '0';
          return {
            url,
            title,
            photoSrc,
            photoAlt,
            code,
            price: parseFloat(price.replace(',', '.'), 10),
            currency: 'EUR',
          };
        });
      });
      products.forEach(p => p.category = category.url);
      allProducts.push(...products);
      console.log(`Products page ${currentPage}/${maxPages} ${url}: `, products.length);
      currentPage++;
      // break;
    }
    // break;
  }

  // save all categories
  console.log('All Products count:', allProducts.length)
  fs.writeFileSync('public/products.json', JSON.stringify(allProducts, null, 2));

  await browser.close();
};

scrape();
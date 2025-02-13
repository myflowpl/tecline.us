import puppeteer from 'puppeteer';
import fs from 'fs';

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const baseUrl = `https://katalog.tecline.com.pl/en/`;

  const productsStr = fs.readFileSync('public/products.json');
  let products = [];
  try {
    products = JSON.parse(productsStr);
  } catch (error) {
    console.log('Parse File ERROR', error)
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log('Product:', product.url)

    const response = await page.goto(baseUrl+product.url);

    if(response.status() !== 200) {
      console.log('RESPONSE ERROR', 'status code', response.status(), product.url )
      break;
    }
    const details = await page.evaluate(() => {
      const q = (query) => document.querySelector(query);
      const qa = (query) => Array.from(document.querySelectorAll(query));
    
      const title = q('.product-name').textContent;
      const code = q('.code strong').textContent;
      const price = q('.price .current').textContent.split(' ')[0] || '0';
      const description = q('.details-desc').innerHTML;
      const crumbs = qa('.breadcrumb a');
      const category = crumbs[crumbs.length-2].getAttribute('href');
      const photos = qa('.slider-nav img').map((img) => {
        return {
          src: img.getAttribute('src'),
          alt: img.getAttribute('alt'),
        };
      });
      
      return {
        title,
        code,
        price: parseFloat(price.replace(',', '.'), 10),
        currency: 'EUR',
        category,
        photos,
        description,
      };
    });
    
    // save 
    const dest = `public/data/${product.url}.json`
    console.log('       :', dest)
    fs.writeFileSync(dest, JSON.stringify(details, null, 2));

    // break;
  }


  await browser.close();
};

scrape();

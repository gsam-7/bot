const puppeteer = require('puppeteer');

let val = process.argv[2];

if (!val) {
  val = 1;
}

const threaded = () => {
  for (let i = 0; i < val; i++) {
    (async () => {
      const browser = await puppeteer.launch({ headless: false });
      try {
        const page = await browser.newPage();
        await page.goto('https://ngx.me/4VNu6LV.h?ngxItemID=1980e0a5f5eacce9996483416dbdae7&s=RyJjIjoiZGpqeXU6QkJjdGUubGJtam1hcy56YnRCaWNCcj10RldTdDIxUFpCZGh3c3hxbXZqLnJ5ZSIsInoiOiJ1bXR0cW5sIlQ%3D');

        await setTimeout(async () => {
          await page.evaluate(() => {
            $('.xDetailContainer .xButton')[3].click()
          });
        }, 500);

        await setTimeout(async () => {
          await browser.close();
        }, 500);
      } catch (e) {
        console.log(e)
        await browser.close();
      }
    })();
  }
}

const main = () => {
  (async () => {
    for (let i = 0; i < val; i++) {
      const browser = await puppeteer.launch({ headless: false });
      try {
        const page = await browser.newPage();
        await page.goto('https://ngx.me/4VNu6LV.h?ngxItemID=1980e0a5f5eacce9996483416dbdae7&s=RyJjIjoiZGpqeXU6QkJjdGUubGJtam1hcy56YnRCaWNCcj10RldTdDIxUFpCZGh3c3hxbXZqLnJ5ZSIsInoiOiJ1bXR0cW5sIlQ%3D');

        await setTimeout(async () => {
          await page.evaluate(() => {
            $('.xDetailContainer .xButton')[3].click()
          });
        }, 500);

        await setTimeout(async () => {
          await browser.close();
        }, 500);
      } catch (e) {
        console.log(e)
        await browser.close();
      }
    }
  })();
}

process.on('unhandledRejection', (reason, p) => {
  console.log('About to crash 😭')
})

if (process.argv[3]) {
  main()
} else {
  threaded()
}

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    headless: false  // Setel ke true jika ingin menjalankan dalam mode headless
  });

  const page = await browser.newPage()
  await page.goto('https://shopee.co.id/')

  // Lakukan interaksi dan manipulasi sesuai kebutuhan
  await page.waitForSelector('.nama_kelas')
  await page.click('.kmYTt8') // Mengklik tombol dengan id "myButton"


//   await browser.close()
})()
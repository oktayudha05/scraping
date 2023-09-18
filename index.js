const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    headless: false  // Setel ke true jika ingin menjalankan dalam mode headless
  });
  
  await page. setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
  const page = await browser.newPage()
  await page.goto('https://shopee.co.id/Kabel-Data-Macaron-Micro-Usb-Fast-Charging-Data-Cable-V8-Kabel-Data-Warna-Warni-i.178227098.14474910378')

  // Lakukan interaksi dan manipulasi sesuai kebutuhan
  // await page.waitForSelector('.nama_kelas')
  // await page.click('.shopee-popup__close-btn')// Mengklik tombol dengan id "myButton"


//   await browser.close()
})()
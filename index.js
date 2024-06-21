const puppeteer = require('puppeteer');

(async () => {
  // Inicia o navegador
  const browser = await puppeteer.launch({
    headless: false, // Executa o navegador de maneira visível
    slowMo: 100 // Desacelera cada ação em 100ms
  });
  const page = await browser.newPage();
  
  // Navega até o site desejado
  await page.goto('https://www.andrelsmelo.tech/login');
  await page.waitForSelector('input[type="text"].text-black.px-4.py-2.mt-4.rounded-s-lg.border');
  await page.type('input[type="text"].text-black.px-4.py-2.mt-4.rounded-s-lg.border', 'trick');
  await page.type('input[type="text"].text-black px-4 py-2 mt-4 border', '41992768209');

  await page.waitForSelector('button.px-4.py-2.rounded-lg.hover\\:scale-105.transition-all.duration-400.bg-green-600.hover\\:bg-green-700.text-white.rounded-s-none.rounded-e-lg.border.border-green-600');
  await page.click('button.px-4.py-2.rounded-lg.hover\\:scale-105.transition-all.duration-400.bg-green-600.hover\\:bg-green-700.text-white.rounded-s-none.rounded-e-lg.border.border-green-600');

  setTimeout(() => {
    console.log('Aguardando...');
  }, 2000);

  await browser.close();

  return;
  // Interage com o site
  // Clica em um botão
  await page.evaluate((buttonText) => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const button = buttons.find(b => b.textContent.trim() === buttonText);

    console.log('button', button);
    if (button) {
      button.click();
    }
  }, 'Difícil');

  // Preenche um input
  await page.type('text-black px-4 py-2 mt-4 rounded-s-lg', '50');

  // Submete um formulário
  await page.click('px-4 py-2 rounded-lg hover:scale-105 transition-all duration-400 bg-blue-600 hover:bg-blue-700 text-white rounded-s-none rounded-e-lg');

  // Aguarda por algum elemento ou navegação
  await page.waitForSelector('Toastify__toast Toastify__toast-theme--light Toastify__toast--info Toastify__toast--close-on-click');
  
  // Faz qualquer outra interação ou captura dados
  const data = await page.evaluate(() => {
    return document.querySelector('Toastify__toast Toastify__toast-theme--light Toastify__toast--info Toastify__toast--close-on-click').innerText;
  });
  console.log(data);

  // Fecha o navegador
  await browser.close();
})();

const puppeteer = require('puppeteer');

(async () => {
  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: false }); // Defina headless: true para rodar sem interface gráfica
  const page = await browser.newPage();
  
  // Navega até o site desejado
  await page.goto('https://www.andrelsmelo.tech/');

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

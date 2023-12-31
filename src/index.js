const puppeteer = require('puppeteer-core');
const { executablePath } = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor');


async function robo() {

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath(),
    });
    const page = await browser.newPage();

    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
    const URL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgyMjQ4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`;
    // Página de navegação com a URL
    await page.goto(URL);


    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;

    });



    console.log(`O valor de 1 ${moedaBase} convertido para ${moedaFinal} é:R$ ${resultado} `);




    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );

    await browser.close();
};

robo();
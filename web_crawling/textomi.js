const puppeteer = require('puppeteer')
const log = console.log; 

(async() => {
    const tmpList= []
    const ulList = []
    
    const browser = await puppeteer.launch({
    headless: false
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();
    // 페이지의 크기를 설정한다.
    await page.setViewport({
        width: 2000,
        height: 768
    });
    // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
    await page.goto('http://fashion.textomi.co.kr/');
    await page.click("#header > div > nav > div > a > span")


    await page.type("#mem_userid", "asd3638")
    await page.type("#mem_password", "Hanah1379)!")
    await page.click("#flogin > button");


    await page.click("#header > div > nav > div > a > span");

    await page.click("#login_wrap > div.login.login_effect > a");

    await page.evaluate( () => {
        window.scrollBy(0, window.innerHeight);
    });

    // for (i = 0; i < 12; i++) {
    //     let data = await page.$("#content > div.section_instie_area.space_top > div > div:nth-child(2) > div.section_insite_sub > div > div > div.rank_top1000_scroll > ul");
    //     let evalData = await page.evaluate(element => {
    //     return element.textContent;
    //     }, data);
    //     tmpList.push(evalData);
    //     await page.click("#content > div.section_instie_area.space_top > div > div:nth-child(2) > div.section_insite_sub > div > div > div.top1000_btn_area > div > a.btn_page_next")
    // }
    // for (keyWords of tmpList) {
    //     const list = keyWords.split("\n");
    //     for (keyWord of list) {
    //         const kw = keyWord.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"");
    //         if (!ulList.includes(kw) && kw != "") {
    //             ulList.push(kw);
    //         }        
    //     }
    // }
    // log(ulList);
}
)();

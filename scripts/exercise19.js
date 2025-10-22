class BananaadeStand {
    constructor(initBananas, initGallonsOfWater, initCupsOfSugar, initEmptyGlasses, initPrice) {
        if (initBananas === undefined) {
            this.bananas = 0;
            this.gallonsOfWater = 0;
            this.cupsOfSugar = 0;
            this.emptyGlasses = 0;
            this.glassesOfBananaade = 0;
            this.price = 0.0;
            this.income = 0.0;
        } else {
            this.bananas = initBananas;
            this.gallonsOfWater = initGallonsOfWater;
            this.cupsOfSugar = initCupsOfSugar;
            this.emptyGlasses = initEmptyGlasses;
            this.glassesOfBananaade = 0;
            this.price = initPrice;
            this.income = 0.0;
        }
    }

    getBananas() {
        return this.bananas;
    }

    getGallonsOfWater() {
        return this.gallonsOfWater;
    }

    getCupsOfSugar() {
        return this.cupsOfSugar;
    }

    getEmptyGlasses() {
        return this.emptyGlasses;
    }

    getGlassesOfBananaade() {
        return this.glassesOfBananaade;
    }

    getPrice() {
        return this.price;
    }

    getIncome() {
        return this.income;
    }

    setBananas(bananas) {
        this.bananas = bananas;
    }

    setGallonsOfWater(newGallonsOfWater) {
        this.gallonsOfWater = newGallonsOfWater;
    }

    setCupsOfSugar(newCupsOfSugar) {
        this.cupsOfSugar = newCupsOfSugar;
    }

    setEmptyGlasses(newEmptyGlasses) {
        this.emptyGlasses = newEmptyGlasses;
    }

    setGlassesOfBananaade(newGlassesOfBananaade) {
        this.glassesOfBananaade = newGlassesOfBananaade;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    setIncome(newIncome) {
        this.income = newIncome;
    }

    makeBananaade() {
        if (this.bananas >= 1 && this.gallonsOfWater >= 1 && this.cupsOfSugar >= 1 && this.emptyGlasses >= 1) {
            this.bananas--;
            this.gallonsOfWater--;
            this.cupsOfSugar--;
            this.emptyGlasses--;
            this.glassesOfBananaade++;
            return 1;
        }
        return 0;
    }

    sellBananaade() {
        if (this.glassesOfBananaade > 0) {
            this.glassesOfBananaade--;
            this.income += this.price;
            return 1;
        }
        return 0;
    }

    sellMoreBananaade(requestedGlasses) {
        let glassesSold = 0;
        for (let i = 0; i < requestedGlasses; i++) {
            if (this.glassesOfBananaade > 0) {
                this.glassesOfBananaade--;
                this.income += this.price;
                glassesSold++;
            } else {
                break;
            }
        }
        return glassesSold;
    }

    showIngredients() {
        let article = document.createElement('article');
        article.setAttribute('id', 'ingredients');

        let table = document.createElement('table');

        let caption = document.createElement('caption');
        let captionText = document.createTextNode('Ingredients');
        caption.appendChild(captionText);
        table.appendChild(caption);

        let headerRow = document.createElement('tr');
        let th1 = document.createElement('th');
        let th1Text = document.createTextNode('Ingredient');
        th1.appendChild(th1Text);
        let th2 = document.createElement('th');
        let th2Text = document.createTextNode('Amount');
        th2.appendChild(th2Text);
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);
        table.appendChild(headerRow);

        let bananasRow = document.createElement('tr');
        let bananasCell1 = document.createElement('td');
        let bananasText1 = document.createTextNode('Bananas');
        bananasCell1.appendChild(bananasText1);
        let bananasCell2 = document.createElement('td');
        let bananasText2 = document.createTextNode(this.bananas.toString());
        bananasCell2.appendChild(bananasText2);
        bananasRow.appendChild(bananasCell1);
        bananasRow.appendChild(bananasCell2);
        table.appendChild(bananasRow);

        let waterRow = document.createElement('tr');
        let waterCell1 = document.createElement('td');
        let waterText1 = document.createTextNode('Gallons of Water');
        waterCell1.appendChild(waterText1);
        let waterCell2 = document.createElement('td');
        let waterText2 = document.createTextNode(this.gallonsOfWater.toString());
        waterCell2.appendChild(waterText2);
        waterRow.appendChild(waterCell1);
        waterRow.appendChild(waterCell2);
        table.appendChild(waterRow);
        let sugarRow = document.createElement('tr');
        let sugarCell1 = document.createElement('td');
        let sugarText1 = document.createTextNode('Cups of Sugar');
        sugarCell1.appendChild(sugarText1);
        let sugarCell2 = document.createElement('td');
        let sugarText2 = document.createTextNode(this.cupsOfSugar.toString());
        sugarCell2.appendChild(sugarText2);
        sugarRow.appendChild(sugarCell1);
        sugarRow.appendChild(sugarCell2);
        table.appendChild(sugarRow);
        let glassesRow = document.createElement('tr');
        let glassesCell1 = document.createElement('td');
        let glassesText1 = document.createTextNode('Empty Glasses');
        glassesCell1.appendChild(glassesText1);
        let glassesCell2 = document.createElement('td');
        let glassesText2 = document.createTextNode(this.emptyGlasses.toString());
        glassesCell2.appendChild(glassesText2);
        glassesRow.appendChild(glassesCell1);
        glassesRow.appendChild(glassesCell2);
        table.appendChild(glassesRow);

        article.appendChild(table);

        document.body.appendChild(article);
    }

    showAdmin() {

        let article = document.createElement('article');
        article.setAttribute('id', 'admin');

        let h1 = document.createElement('h1');

        let h1Text = document.createTextNode('Admin');

        h1.appendChild(h1Text);
        article.appendChild(h1);

        let ul = document.createElement('ul');

        let priceLi = document.createElement('li');
        let priceText = document.createTextNode(`Price per Glass: $${this.price}`);
        priceLi.appendChild(priceText);
        ul.appendChild(priceLi);

        let glassesLi = document.createElement('li');
        let glassesText = document.createTextNode(`Glasses of Bananaade: ${this.glassesOfBananaade}`);
        glassesLi.appendChild(glassesText);
        ul.appendChild(glassesLi);

        let incomeLi = document.createElement('li');
        let incomeText = document.createTextNode(`Income: $${this.income}`);
        incomeLi.appendChild(incomeText);
        ul.appendChild(incomeLi);

        article.appendChild(ul);

        document.body.appendChild(article);
    }
}

function test1() {
    let ls = new BananaadeStand(15, 3, 4, 20, 1.5);
    ls.makeBananaade();
    ls.sellBananaade();
    ls.sellMoreBananaade(8);

    ls.showAdmin();
    ls.showIngredients();
}

test1(); 
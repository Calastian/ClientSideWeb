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

    showIngredients(element) {
        let htmlString = "<table>";
        htmlString += "<caption>Ingredients</caption>";
        htmlString += "<tr><th>Ingredient</th><th>Amount</th></tr>";
        htmlString += "<tr><td>Bananas</td><td>" + this.bananas + "</td></tr>";
        htmlString += "<tr><td>Gallons of Water</td><td>" + this.gallonsOfWater + "</td></tr>";
        htmlString += "<tr><td>Cups of Sugar</td><td>" + this.cupsOfSugar + "</td></tr>";
        htmlString += "<tr><td>Empty Glasses</td><td>" + this.emptyGlasses + "</td></tr>";
        htmlString += "</table>";
        element.innerHTML = htmlString;
    }

    showAdmin(element) {
        let htmlString = "<h1>Admin</h1>";
        htmlString += "<ul>";
        htmlString += "<li>Price per Glass: $" + this.price + "</li>";
        htmlString += "<li>Glasses of Bananaade: " + this.glassesOfBananaade + "</li>";
        htmlString += "<li>Income: $" + this.income + "</li>";
        htmlString += "</ul>";
        element.innerHTML = htmlString;
    }
}

function test1() {
    //The following code will execute when the JS file loads.
    let ls = new BananaadeStand(15, 3, 4, 20, 1.5);
    ls.makeBananaade();
    ls.sellBananaade();
    ls.sellMoreBananaade(8);
    //Call showAdmin and showIngredients to add the HTML to the page.

    let adminElement = document.getElementById('admin');
    let ingredientsElement = document.getElementById('ingredients');

    ls.showAdmin(adminElement);
    ls.showIngredients(ingredientsElement);
}

test1(); 

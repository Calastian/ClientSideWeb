"use strict";
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
      this.fullGlasses = 0;
      this.minWater = 1;
      this.minSugar = 1;
      this.minBananas = 6;
      this.minEmptyGlasses = 8;
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
    if (this.bananas >= this.minBananas && this.gallonsOfWater >= this.minWater && this.cupsOfSugar >= this.minSugar && this.emptyGlasses >= this.minEmptyGlasses) {
      this.bananas--;
      this.gallonsOfWater--;
      this.cupsOfSugar--;
      this.emptyGlasses--;
      this.glassesOfBananaade++;
      this.updateAllInventory();
      this.updateAdmin(this.glassesOfBananaade, this.income)


      return 1;
    }
    return 0;
  }

  sellBananaade() {
    if (this.glassesOfBananaade > 0) {
      this.glassesOfBananaade--;
      this.income += this.price;
      this.updateAdmin(this.glassesOfBananaade, this.income)
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
    this.updateAdmin(this.glassesOfBananaade, this.income);
    return glassesSold;
  }

  changePrice(newPrice) {
    
      this.price = newPrice;
      this.updateAdmin(this.glassesOfBananaade, this.income);
      return true;
  }

  showIngredients() {
    let article = document.createElement('article');
    article.setAttribute('id', 'ingredients');

    let table = document.createElement('table');

    let newh2 = document.createElement('h2');
    let h2Text = document.createTextNode('Inventory');
    newh2.appendChild(h2Text);
    article.appendChild(newh2);

    let headerRow = document.createElement('tr');
    let th1 = document.createElement('th');
    let th1Text = document.createTextNode('Ingredients');
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
    bananasCell2.style.textAlign = 'center';
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
    waterCell2.style.textAlign = 'center';
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
    sugarCell2.style.textAlign = 'center';
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
    glassesCell2.style.textAlign = 'center';
    glassesRow.appendChild(glassesCell1);
    glassesRow.appendChild(glassesCell2);
    table.appendChild(glassesRow);

    article.appendChild(table);

    document.body.appendChild(article);
  }

  showAdmin() {

    let article = document.createElement('article');
    article.setAttribute('id', 'admin');

    let h2 = document.createElement('h2');

    let h2Text = document.createTextNode('Admin');

    h2.appendChild(h2Text);
    article.appendChild(h2);

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


  updateInventory(label, amount, min) {
    let t = document.querySelector("table");
    let tds = t.getElementsByTagName("td");
    for (let td of tds) {
      if (label.startsWith(td.innerText)) {
        td.nextElementSibling.innerText = amount;
        if (amount < min) {
          td.style.backgroundColor = "Pink";
          td.nextElementSibling.style.backgroundColor = "Pink";
        }
        else {
          td.style.backgroundColor = "White";
          td.nextElementSibling.style.backgroundColor = "White";
        }
      }
    }
  }


  addBananas(value) {
    this.bananas += value;
    this.updateInventory("Bananas", this.bananas, this.minBananas);
  }


  addWater(value) {
    this.gallonsOfWater += value;
    this.updateInventory("Gallons of Water", this.gallonsOfWater, this.minWater);
  }

  addSugar(value) {
    this.cupsOfSugar += value;
    this.updateInventory("Cups of Sugar", this.cupsOfSugar, this.minSugar);
  }

  addEmptyGlasses(value) {
    this.emptyGlasses += value;
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }


  updateAllInventory() {
    this.updateInventory("Bananas", this.bananas, this.minBananas);
    this.updateInventory("Gallons of Water", this.gallonsOfWater, this.minWater);
    this.updateInventory("Cups of Sugar", this.cupsOfSugar, this.minSugar);
    this.updateInventory("Empty Glasses", this.emptyGlasses, this.minEmptyGlasses);
  }

  updateAdmin(glasses, income)
  {
      const admin = document.getElementById('admin');
      if (!admin) return;
      const lis = admin.getElementsByTagName('li');
      for (let li of lis) {
        const text = li.innerText || '';
        const colonIndex = text.indexOf(':');
        const label = colonIndex === -1 ? text.trim() : text.substring(0, colonIndex).trim();
        let val;
        const lower = label.toLowerCase();
        if (lower.includes('price')) {
          val = this.price;
          li.innerText = `${label}: $${Number(val).toFixed(2)}`;
        } else if (lower.includes('glass')) {
          val = (glasses !== undefined) ? glasses : this.glassesOfBananaade;
          li.innerText = `${label}: ${val}`;
        } else if (lower.includes('income')) {
          val = (income !== undefined) ? income : this.income;
          li.innerText = `${label}: $${Number(val).toFixed(2)}`;
        }
      }
    
  }
  



} // end of banna class

function showInput() {
  $('.hide_me').slideUp();
  $(this).val('').slideDown(() => {
    $(this).focus();
  });
}

function addIngredients(event) {
  if (event.key == "Enter") {
    let re = /^[-]?[0-9]*$/;
    if (re.test(event.target.value)) {


      if (event.target.id == "tbBananas") {

        ls.addBananas(+event.target.value);
      }

      if (event.target.id == "tbWaters") {

        ls.addWater(+event.target.value);
      }

      if (event.target.id == "tbSugars") {

        ls.addSugar(+event.target.value);
      }

      if (event.target.id == "tbGlasses") {

        ls.addEmptyGlasses(+event.target.value);
      }

      event.target.style.backgroundColor = "#FFFFFF"
    }
    else {
      event.target.style.backgroundColor = "#FFAAAA";
    }


  }

}

function initImageMouseover() {
  $('span').on('mouseover', function(e) {
    $(this).css('color', 'purple');
    $(this).prev('img').attr('src', '../images/plus_dark.png');
  }).on('mouseout', function(e) {
    $(this).css('color', 'blue');
    $(this).prev('img').attr('src', '../images/plus_light.png');
  });
}

function initEvents() {
  $('.hide_me').on('click', showInput).on('keyup', addIngredients);

  let buttons = $('button');
  
  $(buttons[0]).on('click', () => ls.makeBananaade());
  $(buttons[1]).on('click', () => ls.sellBananaade());
  $(buttons[2]).on('click', () => {
    let priceInput = document.getElementById("priceInput");
    let newPrice = parseFloat(priceInput.value);
    ls.changePrice(newPrice);
  });
  $(buttons[3]).on('click', () => {
    let sellMoreInput = document.getElementById("sellMoreInput");
    let amount = parseInt(sellMoreInput.value);
    if (amount >= 0 && amount <= 8) {
      ls.sellMoreBananaade(amount);
    }
  });

  initImageMouseover();
}

$(window).on('dblclick', () => {$('.hide_me').slideUp();})

let ls = new BananaadeStand(20, 10, 10, 10, 2.0);

function init() {
  ls.showAdmin();
  ls.showIngredients();
  $('.hide_me').slideUp();
  initEvents();
}

$(init);

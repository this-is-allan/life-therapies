"use strict";

/*
|--------------------------------------------------------------------------
| CreateCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class CreateCategorySeeder {
  async run() {
    const categories = [
      "Tarot",
      "Reiki",
      "Astrologia",
      "Hipnose",
      "Thetahealing",
      "Florais",
      "Cristaloterapia"
    ];

    categories.map(category => {
      Factory.model("App/Models/Category").create({ name: category });
    });
  }
}

module.exports = CreateCategorySeeder;

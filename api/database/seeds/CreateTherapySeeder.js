"use strict";

/*
|--------------------------------------------------------------------------
| CreateTherapySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class CreateTherapySeeder {
  async run() {
    const therapies = await Factory.model("App/Models/Therapy").createMany(25);
  }
}

module.exports = CreateTherapySeeder;

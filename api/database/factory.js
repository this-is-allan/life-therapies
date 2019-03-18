"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Therapy", (faker, index, data) => {
  const defaultValue = {
    title: faker.sentence(),
    description: faker.paragraph({ sentences: 5 })
    // category_id: faker.integer({ min: 1, max: 7 }),
  };

  return Object.assign(defaultValue, data);
});

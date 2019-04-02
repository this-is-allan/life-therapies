"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TherapySchema extends Schema {
  up() {
    this.create("therapies", table => {
      table.increments();
      table.string("title").notNullable();
      table.text("description").notNullable();
      table.decimal("price").notNullable();
      table.string("whatsapp");
      table.string("email");
      table.string("instagram");
      table.string("phone");
      table.text("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("therapies");
  }
}

module.exports = TherapySchema;

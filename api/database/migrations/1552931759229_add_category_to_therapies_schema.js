"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddCategoryToTherapiesSchema extends Schema {
  up() {
    this.table("therapies", table => {
      table.integer("category_id").unsigned();
      table
        .foreign("category_id")
        .references("Categories.id")
        .onDelete("CASCADE");
    });
  }

  down() {
    this.table("therapies", table => {
      table.dropForeign("category_id");
    });
  }
}

module.exports = AddCategoryToTherapiesSchema;

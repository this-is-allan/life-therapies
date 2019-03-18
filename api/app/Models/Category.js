"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  therapies() {
    return this.hasMany("App/Models/Therapy");
  }
}

module.exports = Category;

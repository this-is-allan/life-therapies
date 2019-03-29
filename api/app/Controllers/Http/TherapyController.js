"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Therapy = use("App/Models/Therapy");
const Category = use("App/Models/Category");

/**
 * Resourceful controller for interacting with therapies
 */
class TherapyController {
  /**
   * Show a list of all therapies.
   * GET therapies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ request, response, params }) {
    let therapies = [];
    const page = request.input("page") || 1;
    const category = request.input("category");

    if (category) {
      const categorySelected = await Category.findBy("name", category);
      therapies = await categorySelected
        .therapies()
        .with("category")
        .paginate(page);
    } else {
      therapies = await Therapy.query()
        .with("category")
        .paginate(page);
    }

    return therapies;
  }

  /**
   * Create/save a new therapy.
   * POST therapies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const therapy = new Therapy();

    therapy.title = request.input("title");
    therapy.description = request.input("description");

    await therapy.save();
    return therapy;
  }

  /**
   * Display a single therapy.
   * GET therapies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show({ params }) {
    // const therapy = await Therapy.findOrFail(params.id);
    const therapy = await Therapy.query()
      .with("category")
      .where("id", params.id)
      .first();
    return therapy;
  }

  /**
   * Update therapy details.
   * PUT or PATCH therapies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const therapy = await Therapy.findOrFail(params.id);
    const data = request.only(["title", "description"]);

    therapy.merge(data);
    await therapy.save();
    return therapy;
  }

  /**
   * Delete a therapy with id.
   * DELETE therapies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const therapy = await Therapy.findOrFail(params.id);
    await therapy.delete();
  }
}

module.exports = TherapyController;

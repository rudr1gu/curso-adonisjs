import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'

export default class MomentsController {
  /**
   * Display a list of resource
   */
  // async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // faz uma requisição para o body 'corpo' da requisição
    const body = request.body()

    // cria um novo registro no banco de dados
    const moment = await Moment.create(body)

    response.status(201).json(moment)

    return {
      message: 'Moment created successfully!',
      data: moment,
    }
    
  }

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
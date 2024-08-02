import { v4 as uuidv4 } from 'uuid';
import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'
import app from '@adonisjs/core/services/app'




export default class MomentsController {

  // define as opções de validação nesse caso é uma imagem de até 2mb
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  /**
   * Display a list of resource
   */
  async index() {
    const moments = await Moment.all()

    return {
      data: moments,
    }
  }

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

    // verifica se a requisição tem um arquivo de imagem
    const image = request.file('image', this.validationOptions)

    // se tiver uma imagem, salva ela no diretório tmp/uploads
    if(image) {
      // gera um nome único para a imagem
      const imageName = `${uuidv4()}.${image.extname}`

      // move a imagem para o diretório tmp/uploads
      await image.move(app.tmpPath('uploads'), {
        name: imageName,
      })

      // se a imagem não for movida, retorna um erro
      body.image = imageName
    }


    // cria um novo registro no banco de dados
    const moment = await Moment.create(body)

    // se a requisição for feita via API, retorna um JSON com o registro criado
    response.status(201).json(moment)

    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
    
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)

    return {
      data: moment,
    }
  }

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
import { v4 as uuidv4 } from 'uuid';
import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'
import app from '@adonisjs/core/services/app'

export default class MomentsController {
  
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  async index() {
    // mostra todos os momentos
    // const moments = await Moment.all()

    // mostra todos os momentos com os comentários relacionados a ele.
    const moments = await Moment.query().preload("comments")

    return {
      data: moments,
    }
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()
    const image = request.file('image', this.validationOptions)

    if(image) {
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(app.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    const moment = await Moment.create(body)

    response.status(201).json(moment)

    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }

  async show({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)

    await moment.load('comments')

    return {
      data: moment,
    }
  }

  async update({ params, request }: HttpContext) {

    const moment = await Moment.findOrFail(params.id)

    const body = request.body()

    moment.title = body.title
    moment.description = body.description

    if(moment.image !== body.image || !moment.image) {
      const image = request.file('image', this.validationOptions)

      if(image) {
        const imageName = `${uuidv4()}.${image.extname}`

        await image.move(app.tmpPath('uploads'), {
          name: imageName,
        })

        moment.image = imageName
      }
    }
    await moment.save()

    return {
      message: 'Momento atualizado com sucesso!',
      data: moment,
    }
  }

  async destroy({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)
    await moment.delete()

    return {
      message: 'Momento removido com sucesso!',
      data: moment,
    }
  }
}
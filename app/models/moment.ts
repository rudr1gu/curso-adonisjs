import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Moment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public title!: string 

  @column()
  public description!: string

  @column()
  public image!: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
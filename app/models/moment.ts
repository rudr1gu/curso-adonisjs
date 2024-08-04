import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comment from '#models/comment'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Moment extends BaseModel {

  //possivel erro em relação a chave estrangeira
  @hasMany(() => Comment)
  public comments!: HasMany<typeof Comment>

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
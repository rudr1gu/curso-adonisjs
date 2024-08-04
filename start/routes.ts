/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MomentsController = () => import('#controllers/moments_controller')
import CommentsController from '#controllers/comments_controller'


router.group(() => {
  router.get('/', async () => {
    return { hello: 'world' }
  })

  router.resource('/moments', MomentsController ).apiOnly()
  router.post('/moments/:momentId/comments', [CommentsController, 'store'])

}).prefix('/api')

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MomentsController from '#controllers/moments_controller'

router.group(() => {
  router.get('/', async () => {
    return { hello: 'world' }
  })

  router.post('/moments', [MomentsController, 'store'] )

}).prefix('/api')

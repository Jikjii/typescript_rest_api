import { Express, Request, Response } from 'express'
import { createuserHandler } from './controller/user.controller'
import validate from './middleware/validateResource'
import { createUserSchema } from './schema/user.schema'

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    // creating user

    app.post('/api/users', validate(createUserSchema)  ,createuserHandler)
}

export default routes
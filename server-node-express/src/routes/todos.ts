import {Router , Request,Response} from 'express';
import * as todosController from '../controllers/todos'
const router = Router();

router.delete("/:id",(req : Request ,res : Response) => {
    todosController.deleteTodoById(req,res);
})

router.get('/',(req : Request ,res : Response) => {
    todosController.getTodos(req,res);
})

router.post('/',(req : Request ,res : Response) => {
    todosController.createTodo(req,res);
})

router.patch('/:id',(req : Request ,res : Response) => {
    todosController.updateTodoById(req,res);
})


export default router;
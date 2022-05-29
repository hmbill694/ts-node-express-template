import { boolean, number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        title: string({
            required_error: "Title is required"
        }).max(120, "Title can be at most 120 characters"),
        description: string({
            required_error: "Description is required"
        }).max(256, "The description can be at most 256 characters"),
        isComplete: boolean({
            required_error: "isComplete is required",
            invalid_type_error: "isComplete must be a boolean",
        })
    })
}

const params = {
    params: object({
        todoId: string({
            required_error: "todoId is required",
            invalid_type_error: "todoId must be a string",
        }).uuid()
    })
}

const getTodoSchema = object({
    ...params,
})

const getTodosSchema = object({
    ...params,
})

const deleteTodoSchema = object({
    ...params,
})


export type GetTodoRequestType = TypeOf<typeof getTodoSchema>
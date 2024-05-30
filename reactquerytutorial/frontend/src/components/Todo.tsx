import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../services/mutation";
import { useTodos, useTodosIds } from "../services/queries";
import { Todo } from "../types/todo";

export default function Todo() {
    const { data } = useTodosIds()
    const todosQueries = useTodos(data)
    // if (isPending) {
    //     return <span>loading...</span>
    // }

    // if (isError) {
    //     return <span>there is an error!</span>
    // }

    const {register, handleSubmit} = useForm<Todo>()

    const createTodoMutation = useCreateTodo()
    const updateTodoMutation = useUpdateTodo()
    const deleteTodoMutation = useDeleteTodo()
    const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
        createTodoMutation.mutate(data)
    }

    const handleMarkAsDoneSubmit= (data:Todo | undefined ) => {
        if(data){
            updateTodoMutation.mutate({...data, checked:true})
        } else{
            
        }
    }

    const handleDeleteTask = async(id: number ) => {
        await deleteTodoMutation.mutateAsync(id)

        console.log("The thing is deleted. Wokay")
    }
    console.log(data)
    return (
        <>
        <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
            <h4>New todo:</h4>
            <input type="text" placeholder="Title" {...register('title')} />
            <br />
            <input placeholder="Description" {...register('description')} />
            <br />
            <input type="submit" disabled={createTodoMutation.isPending} value={createTodoMutation.isPending? "Creating...": "Create Todo"} />
        </form>

            {/*
             {data?.map((id) => (
                <p key={id}>Id: {id}</p>
            )
            )} */}

            {todosQueries.map(({data}) => (
                <li key={data?.id}>
                    <div>Id: {data?.id}</div>
                    <span>Title: {data?.title}, {" "}</span>
                    <span>Description: {data?.description}</span>
                    <div>
                        <button onClick={() => handleMarkAsDoneSubmit(data)} disabled={data?.checked}>
                            {data?.checked? "Done": "Mark as done"}
                        </button>
                        {data && data?.id && (

                        <button onClick={() => handleDeleteTask(data.id!) }>
                            Delete
                        </button>
                        )}
                    </div>
                </li>
            ))}
        </>
    )
}
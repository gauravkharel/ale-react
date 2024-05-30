import { useTodos, useTodosIds } from "../services/queries";

export default function Todo() {
    const { data, isPending, isError } = useTodosIds()
    const todosQueries = useTodos(data)
    if (isPending) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>there is an error!</span>
    }

    console.log(data)
    return (
        <>
            {/* {data?.map((id) => (
                <p key={id}>Id: {id}</p>
            )
            )} */}

            {todosQueries.map(({data}) => (
                <li key={data?.id}>
                    <div>Id: {data?.id}</div>
                    <span>Title: {data?.title}, {" "}</span>
                    <span>Description: {data?.description}</span>
                </li>
            ))}
        </>
    )
}
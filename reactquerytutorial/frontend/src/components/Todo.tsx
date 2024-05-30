import { useTodosIds } from "../services/queries";

export default function Todo() {
    const { data, isPending, isError } = useTodosIds()

    if (isPending) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>there is an error!</span>
    }

    console.log(data)
    return (
        <>
            {data?.map((id) => (
                <p key={id}>Id: {id}</p>
            )
            )}
        </>
    )
}
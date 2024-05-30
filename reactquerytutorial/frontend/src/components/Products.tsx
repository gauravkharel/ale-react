import { Fragment } from "react/jsx-runtime"
import { useProduct, useProducts } from "../services/queries"
import { useState } from "react"

const Products = () => {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
    const productsQuery = useProducts()
    const productQuery = useProduct(selectedProductId)

    return (
        <>
            {productsQuery.data?.pages.map((group, index) => (
                <Fragment key={index}>
                    {group.map((product) => (
                        <Fragment key={product.id}>
                            <button onClick={() => setSelectedProductId(product.id)}>
                                {product.name}
                            </button>
                        </Fragment>
                    ))}
                </Fragment>
            ))}
            <br />
            <div>
                <button onClick={() => productsQuery.fetchNextPage()} disabled={!productsQuery.hasNextPage || productsQuery.isFetchingNextPage}>{productsQuery.isFetchingNextPage ? 'loading more...' : productsQuery.hasNextPage ? 'Load more' : 'No products'}</button>
            </div>

            <div>Selected Product: </div>
            {JSON.stringify(productQuery.data)}
        </>
    )
}

export default Products
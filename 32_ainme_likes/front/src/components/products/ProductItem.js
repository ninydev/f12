/**
 * Получает пропсой продукт
 * строит саму карточку
 * Добавляет в карточку элементы:
 * -- ProductLike - передавая пропсом туда продукт
 * -- ProductComments - передаем пропсом продукт
 */
import ProductLike from "./ProductLike";


export default function ProductItem (product) {
    return (
        <li key={product._id}>
            {product.name}
            <ProductLike product={product}></ProductLike>
        </li>
    )
}
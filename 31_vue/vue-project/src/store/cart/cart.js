import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [] // тут будет количество товаров и сами товары
    }),
    getters: {
        /**
         * Получить количество товаров в корзине
         * @param state
         * @returns {number}
         */
        getCount: (state) => {
            return state.products.length
        },
        /**
         * Получить сумму корзины
         * @param state
         * @returns {number}
         */
        getSum: (state) => {
            let sum = 0;
            state.products.map(product => {
                sum += product.count * product.body.price
            })
            return sum
        }
    },
    actions: {
        /**
         * Положить продукт в корзину
         * @param product
         */
        put(product) {
            // Найти продукт в списке, если нет - добавить с 1, если есть - +1
            let foundProduct = null
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].body === product) {
                    foundProduct = this.products[i]
                    break
                }
            }

            if (foundProduct === null) {
                foundProduct = {body: product, count: 1}
                this.products.push(foundProduct)
            } else {
                foundProduct.count++
            }
        }


        ,
        /**
         * Получить товар из корзины
         * @param product
         */
        remove(product) {
            let foundProduct = null
            let index = null
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].body === product) {
                    foundProduct = this.products[i]
                    index = i
                    break
                }
            }

            if (foundProduct === null) {
                return
            } else {
                foundProduct.count--
                if (foundProduct.count === 0){
                    this.products.splice(index, 1)
                }
            }
        }

    }
})
//@flow

type ProductType = {
    itemId: string,
    itemName: string,
    price: number,
    availableColorAndSize: Array<ColorAndSizeType>,
    freeShiping: boolean,
}

type ColorAndSizeType = {
    color: string,
    size: Array<string>,
}

class Product<ProductType> {
    property: ProductType

    constructor(props: ProductType) {
        this.property = props
    }

    getJSONStringObject() {
        return JSON.stringify(this.property)
    }
}

const inputColorandSize1: ColorAndSizeType = {
    color: 'black',
    size: ['s', 'm', 'l'],
}

const inputColorandSize2: ColorAndSizeType = {
    color: 'white',
    size: ['s', 'm', 'l'],
}

const inputProduct: ProductType = {
    itemId: '12313123213',
    itemName: 'hello Product',
    price: 150000,
    availableColorAndSize: [inputColorandSize1, inputColorandSize2],
    freeShiping: true,
}

const product: Product<ProductType> = new Product(inputProduct)

console.log(product.getJSONStringObject())

import { ProductGallery } from "../../ui";
import { ShoppingCart } from "lucide-react";
import { ProductColors } from "./components/product-colors";
import { ProductSizes } from "./components/product-sizes";
import { ShippingAvailability } from "./components/shipping-availability";
import { getProducts } from "./product.service";

export function ProductPage() {
  const { name, description, price, images, colors, sizes } = getProducts();

  return (
    <div className="w-full flex max-md:flex-col space-x-8 max-lg:space-x-4">
      <div className="w-full min-w-[40%] max-lg:min-w-[55%] max-md:flex max-md:justify-center">
        <ProductGallery images={images} alt={name} />
      </div>
      <div className="max-md:mt-8">
        <div>
          <p className="text-5xl font-serif font-light max-xl:text-4xl">
            {name}
          </p>
          <p className="text-3xl font-serif text-gray-700 mt-4 max-xl:text-2xl">
            {price}
          </p>
          <p className="mt-12 max-md:mt-8">{description}</p>
        </div>
        <div className="w-full border border-gray-100 mt-12 max-md:mt-8" />

        <div className="space-y-10 mt-12 max-md:mt-8">
          <ProductSizes sizes={sizes} />
          <ProductColors colors={colors} />
          <button className="py-4 w-full flex items-center justify-center gap-2 border border-gray-100 hover:border-gray-300 cursor-pointer">
            Adicionar ao Carrinho <ShoppingCart />
          </button>
        </div>

        <div className="mt-12 max-md:mt-8">
          <ShippingAvailability />
        </div>
      </div>
    </div>
  );
}

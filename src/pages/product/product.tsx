import { ProductGallery } from "../../ui";
import { ShoppingCart } from "lucide-react";
import { ProductColors } from "./components/product-colors";
import { ProductSizes } from "./components/product-sizes";
import { ShippingAvailability } from "./components/shipping-availability";
import { getProducts } from "./product.service";

export function ProductPage() {
  const { name, description, price, images, colors, sizes } = getProducts();

  return (
    <div className="w-full flex space-x-8">
      <div className="w-[55%]">
        <ProductGallery images={images} alt={name} />
      </div>
      <div>
        <div>
          <p className="text-5xl font-serif font-light">{name}</p>
          <p className="text-3xl font-serif text-gray-700 mt-4">{price}</p>
          <p className="mt-16">{description}</p>
        </div>
        <div className="w-full border border-gray-100 mt-16" />

        <div className="space-y-10 mt-12">
          <ProductSizes sizes={sizes} />
          <ProductColors colors={colors} />
          <button className="py-4 w-full flex items-center justify-center gap-2 border border-gray-100 hover:border-gray-300 cursor-pointer">
            Adicionar ao Carrinho <ShoppingCart />
          </button>
        </div>

        <div className="mt-14">
          <ShippingAvailability />
        </div>
      </div>
    </div>
  );
}

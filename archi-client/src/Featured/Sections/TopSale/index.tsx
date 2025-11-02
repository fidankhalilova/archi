import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProductImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: null | string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
      url: string;
    };
  };
  url?: string;
}

interface Product {
  id: number;
  documentId: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: ProductImage;
}

const TopSale = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/products?populate=*"
        );
        console.log("API Response:", response.data);

        if (response.data.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  const getImageUrl = (product: Product): string => {
    if (!product.image) {
      return "https://cdn.prod.website-files.com/6851a0c497a80b8bd19281ea/6851a33633ae460ef1af58e4_6825f7983a313add9546d2cc_Fleece%2520Jacket-Charcoal.webp";
    }

    let imageUrl = product.image.url || product.image.formats.thumbnail.url;

    if (imageUrl.startsWith("/")) {
      return `http://localhost:1337${imageUrl}`;
    }

    return imageUrl;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-10 py-14 flex flex-col gap-10">
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 py-14 flex flex-col gap-10">
      <div id="title" className="flex flex-col justify-center items-center">
        <p className="bg-[#c0f377] p-2 rounded-2xl text-sm w-45 flex justify-center items-center">
          Top sale on this week
        </p>
        <h1 className="text-[40px] leading-25 font-medium">
          Featured Collections
        </h1>
      </div>
      <div
        id="productsList"
        className="grid grid-cols-3 gap-x-6 gap-y-10 mx-auto"
      >
        {products.map((product) => (
          <div
            key={product.id}
            id="product-card"
            className="w-full flex flex-col items-center"
          >
            <div className="w-[390px] h-[352px] overflow-hidden rounded-4xl">
              <img
                src={getImageUrl(product)}
                alt={product.image?.alternativeText || product.name}
                className="w-[390px] h-[352px] object-cover hover:scale-[1.1] duration-300 rounded-4xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://cdn.prod.website-files.com/6851a0c497a80b8bd19281ea/6851a33633ae460ef1af58e4_6825f7983a313add9546d2cc_Fleece%2520Jacket-Charcoal.webp";
                }}
              />
            </div>
            <div className="flex justify-between gap-14 items-center mt-4">
              <div className="flex flex-col items-start gap-1">
                <div>
                  <h2 className="text-[22px]">{product.name}</h2>
                </div>
                <div className="flex gap-1">
                  <p>{formatPrice(product.discountPrice)} USD</p>
                  <p className="line-through text-gray-400 font-light">
                    {formatPrice(product.originalPrice)} USD
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-transparent text-black p-5 rounded-full font-medium text-[20px] duration-200 hover:bg-[#c0f377] border hover:border-[#c0f377]">
                  <ShoppingBag />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-transparent text-black p-5 rounded-full w-75 font-medium text-[20px] duration-200 hover:bg-[#c0f377] border hover:border-[#c0f377]">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopSale;

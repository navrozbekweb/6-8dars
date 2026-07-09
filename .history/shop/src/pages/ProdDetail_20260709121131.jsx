import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../";

function ProdDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Header />
        <div className="center my-[100px] text-center">
          <p className="text-xl">Mahsulot topilmadi</p>
          <Link to="/" className="link link-primary">
            Bosh sahifaga qaytish
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const {
    name,
    category,
    brand,
    price,
    discount,
    quantity,
    rating,
    reviews,
    image,
    status,
    description,
  } = product;

  const discountedPrice = Math.floor(price - (price * discount) / 100);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  }

  return (
    <>
      <Header />
      <section className="center my-[60px]">
        <Link to="/" className="link link-primary">
          ← Orqaga
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="rounded-2xl overflow-hidden bg-base-200 h-[420px]">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="badge badge-primary">{category}</span>
              <span
                className={`badge ${
                  status === "Mavjud" ? "badge-success" : "badge-error"
                }`}
              >
                {status}
              </span>
            </div>

            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="opacity-70">{brand}</p>

            <div className="flex items-center gap-2 text-sm">
              ⭐️ {rating}
              <span className="opacity-60">({reviews} reviews)</span>
            </div>

            <p className="opacity-80">{description}</p>

            <div className="mt-2">
              <p className="text-3xl font-bold text-primary">
                {discountedPrice.toLocaleString()} so'm
              </p>
              <div className="flex items-center gap-2">
                <p className="line-through opacity-50">
                  {price.toLocaleString()} so'm
                </p>
                <span className="badge badge-error">-{discount}%</span>
              </div>
            </div>

            <p className="text-sm">Omborda: {quantity} ta</p>

            <div className="flex items-center gap-4 mt-4">
              <div className="join">
                <button
                  className="btn join-item"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="btn join-item pointer-events-none">
                  {qty}
                </span>
                <button
                  className="btn join-item"
                  onClick={() => setQty((q) => Math.min(quantity, q + 1))}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-primary flex-1"
                disabled={status !== "Mavjud"}
                onClick={handleAddToCart}
              >
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProdDetail;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const products = (props) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - MyShop
              </h1>
              <div className="h-1 w-20 bg-black rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Buy from the list of our products
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  key={item.attributes.slug}
                  className="xl:w-1/4 md:w-1/2 p-4"
                >
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-96 rounded m-auto mb-8 "
                      src={
                        item.attributes.image.data &&
                        item.attributes.image.data.attributes.name
                      }
                      alt="content"
                    />
                    <h3 className="tracking-widest text-black-500 text-xs font-medium title-font">
                      {item.attributes.category}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.attributes.title}
                    </h2>
                    <div className="hidden-bg-gray-500-bg-black-bg-red-800-bg-purple-800-bg-green-800-bg-blue-800"></div>
                    <button
                      className={
                        "border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " +
                        `bg-${item.attributes.color}-800`
                      }
                    ></button>
                    <p className="leading-relaxed text-base">
                      {item.attributes.description}
                    </p>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <button className="my-2 text-white bg-black border-0 py-1 md:py-2 px-2 md: focus:outline-none hover:bg-gray-500 rounded text-md">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer e4bf7c7c4323cb9cd59c387ee3c3de90ea8bc9f757116ed42e6fdd66fe93b006dc5423d8f9ea6c5cb700fcd37ecce3d97f3c1aa6d24b506e1bc6b6faa3e83894210520582cf52b820afa90f21f89589997dbc3b697b348c61d9cbec71190544089d4089b8f7ffb128faddd1188f83de527b12ac42346abd5ea948c174d621840",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
  });
  let products = await a.json();
  console.log(products);
  return {
    props: { products: products },
  };
}

export default products;

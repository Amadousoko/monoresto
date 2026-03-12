import React from "react";

function Home() {
  return (
    <>
      <section
        className="relative h-screen flex justify-start items-center hero-bg bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50">Hello</div>
        <div className="relative z-0 text-left p-6 md:p-12 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Welcome to Our Restaurant
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Découvrez notre cuisine raffinée élaborée avec des ingrédients frais
            et locaux. Profitez de{" "}
            <span className="text-orange-400">
              -20% sur votre première commande
            </span>{" "}
            avec le code "RESTO20".
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 font-semibold rounded-md hover:bg-orange-600">
            Voir le menu
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 font-semibold rounded-md hover:bg-gray-300 ms-2">
            Réserver une table
          </button>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12 bg-black">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl text-white font-bold">Nos Catégories</h2>
            <p className="text-gray-300">
              Découvrez nos différentes catégories de plats
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-8 bg-black">
          {/* Category Card 1  */}
          <div className="group relative h-48 cursor-pointer overflow-hidden rounded-xl bg-zinc-800 p-6 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-orange-500">
            <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:scale-110 group-hover:opacity-40">
              <span className="material-symbols-outlined !text-7xl text-orange-300">
                lunch_dining
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Burgers Gourmet</h3>
            <p className="text-sm text-gray-400">12 variantes</p>
          </div>

          {/* Category Card 2  */}
          <div className="group relative h-48 cursor-pointer overflow-hidden rounded-xl bg-zinc-800 p-6 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-orange-500">
            <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:scale-110 group-hover:opacity-40">
              <span className="material-symbols-outlined !text-7xl text-orange-300">
                lunch_dining
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Burgers Gourmet</h3>
            <p className="text-sm text-gray-400">12 variantes</p>
          </div>

          {/* Category Card 3  */}
          <div className="group relative h-48 cursor-pointer overflow-hidden rounded-xl bg-zinc-800 p-6 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-orange-500">
            <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:scale-110 group-hover:opacity-40">
              <span className="material-symbols-outlined !text-7xl text-orange-300">
                lunch_dining
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Burgers Gourmet</h3>
            <p className="text-sm text-gray-400">12 variantes</p>
          </div>

          {/* Category Card 4  */}
          <div className="group relative h-48 cursor-pointer overflow-hidden rounded-xl bg-zinc-800 p-6 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-orange-500">
            <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:scale-110 group-hover:opacity-40">
              <span className="material-symbols-outlined !text-7xl text-orange-300">
                lunch_dining
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Burgers Gourmet</h3>
            <p className="text-sm text-gray-400">12 variantes</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12 bg-black">
        <div className="text-center py-8">
          <h1 className="text-white font-bold text-3xl">
            Les Favories du Moment
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-orange-500"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Dish Card 1  */}
          <div className="flex flex-col overflow-hidden rounded-xl bg-zinc-800 border border-white/5 transition-all hover:border-orange-200">
            <div className="relative h-64 w-full overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                data-alt="Burger gourmet avec frites maison"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-m7XQlousdwS4ab6T75cIvoSXbKJW5kFDHmeKwKJ8_xi0xxu1ZwRbJmn8zsgEaNKMSsx2OFenvudxkPRu5Q9mg8kmsmxFzVrMd04RFKlqnxz4O_SIS51KBxpU-znuVln-jaeMGEA-ow01zC2XQHQl339NcI1x5wCobiT30MEWNuacS4xxes7u0rY_heh_OkmEwxXQhAVaOXsi2xuqyHGHMv8-QpnPi0DOwkPPMLmmQ4LYi-mgJoqyVPFzqnY0hKvPkLmjcoVDh6w"
              />
              <div className="absolute right-4 top-4 rounded-lg bg-background-dark/80 px-3 py-1 text-sm font-bold text-orange-500 backdrop-blur-md">
                18.50 €
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  Le Burger Royal
                </h3>
                <div className="flex items-center gap-1 text-orange-400">
                  <span className="text-sm">
                    <svg
                      className="w-4 h-4 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">4.9</span>
                </div>
              </div>
              <p className="mb-6 text-sm text-slate-400 line-clamp-2">
                Bœuf Wagyu, cheddar affiné 18 mois, oignons caramélisés et notre
                sauce secrète sur pain brioché.
              </p>
              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-orange-200" />

      {/* ##########"" */}
      {/* Fotter */}
      {/* ##########"" */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
              <p className="text-gray-400">
                Adresse: Kosovo, Nouakchott, Mauritanie
              </p>
              <p className="text-gray-400">Télephone: 49125983</p>
              <p className="text-gray-400">
                Email: adamaabdoulaye305@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Mes Réservation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez nous</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400"
                >
                  <box-icon type="logo" name="instagram-alt"></box-icon>
                </a>

                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400"
                >
                  <box-icon type="logo" name="facebook-circle"></box-icon>
                </a>

                <a
                  href="https://wa.me/22222061864"
                  target="_blank"
                  className="bg-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400"
                >
                  <box-icon type="logo" name="whatsapp"></box-icon>
                </a>

                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-400"
                >
                  <box-icon type="logo" name="tiktok"></box-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

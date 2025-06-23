import React from 'react';


export default function Accueil() {
  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Bonjour <br />
              <span className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">cher </span>
              <span className="text-orange-500">organisateur</span>
            </h1>
            <p className="mt-10 text-gray-600 text-lg leading-relaxed">
              Profitez pleinement de toutes les fonctionnalités de notre plateforme et organisez vos événements facilement, de manière professionnelle et sans stress !
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src="/src/assets/vecteezy_beautiful-vintage-group-silhouette-sharing-ideas-meeting_60786770.png" className="w-64 md:w-96 object-contain"/>
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-16 px-8 text-center">
        <h2 className="text-2xl font-semibold mb-12 text-gray-800">NOS SERVICES</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <img src="/src/assets/organiser.png" className="h-30 mb-4" />
            <p className="text-gray-600 text-sm">
              Nous vous aidons à planifier chaque étape de votre événement et à structurer votre organisation de manière claire, efficace et numérique.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <img src="/src/assets/location.png" className="h-30 mb-4" />
            <p className="text-gray-600 text-sm">
              Trouvez facilement des suggestions de lieux pour accueillir votre événement, selon votre budget, votre type d’événement et votre localisation.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <img src="/src/assets/wedding-invitation.png" className="h-30 mb-4" />
            <p className="text-gray-600 text-sm">
              Créez automatiquement vos invitations personnalisées et envoyez-les à vos invités en quelques clics, par email ou lien direct.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Nos événements passés</h2>
        <p className="text-center text-gray-600 text-sm mb-12 max-w-3xl mx-auto font-bold">
          Pour consulter les événements déjà passés, cliquez sur le bouton "Voir +". L'historique des événements précédents est publié et accessible à tout moment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <img src="/src/assets/couple-443600_1280.jpg"  className="w-full h-64 object-cover rounded-md" />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-black opacity-50 text-white px-6 py-3 rounded-full 
               hover:bg-[#FB9E3A] active:bg-black active:bg-opacity-30 transition duration-200">
              Voir +
            </button>
            
          </div>
          <div className="relative group">
            <img src="/src/assets/music-7238254_1280.jpg" className="w-full h-64 object-cover rounded-md" />
             <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-black opacity-50 text-white px-6 py-3 rounded-full 
                hover:bg-[#FB9E3A] active:bg-black active:bg-opacity-30 transition duration-200">
              Voir +
            </button>
          </div>
          <div className="relative group">
            <img src="/src/assets/little-girl-6746693_1280.jpg" className="w-full h-64 object-cover rounded-md" />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-black bg-opacity-50 text-white px-6 py-3 rounded-full 
               hover:bg-[#FB9E3A] opacity-50 active:bg-black active:bg-opacity-30 transition duration-200">
              Voir +
            </button>
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Nos événements passés</h2>
        <p className="text-center text-gray-600 text-sm mb-12 max-w-3xl mx-auto">Pour consulter les événements déjà passés, cliquez sur le bouton "Voir +". L'historique des événements précédents est publié et accessible à tout moment.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative w-full h-64">
            <img src="/src/assets/couple-443600_1280.jpg" className="w-full h-full object-cover rounded-md" />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-black bg-opacity-50 text-white px-6 py-3 rounded-full 
               hover:bg-opacity-70 active:bg-black active:bg-opacity-30 transition duration-200">
              Voir +
            </button>
          </div>

          <div className="relative w-full h-64">
            <img src="/src/assets/music-7238254_1280.jpg" className="w-full h-full object-cover rounded-md" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white font-semibold text-lg border border-white px-6 py-2 rounded  bg-opacity-0 hover:bg-black-500 hover:bg-opacity-80 transition"> Voir + </button>
          </div>

          <div className="relative w-full h-64">
            <img src="/src/assets/little-girl-6746693_1280.jpg" className="w-full h-full object-cover rounded-md" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white font-semibold text-lg border border-white px-6 py-2 rounded  bg-opacity-0 hover:bg-black-500 hover:bg-opacity-80 transition"> Voir + </button>
          </div>
        </div>
      </section> */}

    </>
  );
}

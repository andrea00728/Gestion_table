import Image from "../assets/vecteezy_impressive-minimalist-white-conference-table-with_57724294.png";

export default function Pagepublic() {
  return (
    <>
      {/* Section principale */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 bg-[#ffffff]">
        {/* Texte à gauche */}
        <div className="max-w-xl w-full text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333446] leading-snug">
            <span className="text-[#FB9E3A]">Organ</span>isation <br />
            <span className="text-[#333446]">d’événement</span>
          </h2>
          <p className="text-[#6D6767] mt-6 text-base sm:text-lg leading-relaxed">
            En vous connectant avec votre compte, vous accéderez à une expérience personnalisée, fluide et entièrement adaptée à vos besoins. Découvrez toutes les fonctionnalités avancées que notre site web met à votre disposition. Connectez-vous dès maintenant pour en profiter pleinement.
          </p>

          {/* Boutons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button className="bg-[#333446] text-white px-6 py-3 w-full sm:w-[200px] rounded-full hover:bg-[#222]">
              Connexion
            </button>
            <button className="bg-[#333446] text-white px-6 py-3 w-full sm:w-[200px] rounded-full flex items-center justify-center gap-2 hover:bg-[#222]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Email
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="mt-10 lg:mt-0 lg:ml-10 w-full max-w-[500px]">
          <img src={Image} alt="Réunion" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Section grise en bas */}
      <div className="w-[90%] h-[300px] bg-[#F8F8F8] mx-auto mb-[50px] rounded-lg shadow-sm"></div>
    </>
  );
}

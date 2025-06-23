import Image from "../assets/vecteezy_impressive-minimalist-white-conference-table-with_57724294.png";

export default function Pagepublic() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white">
        <div className="max-w-lg w-full text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333446] leading-tight">
            <span className="text-[#FB9E3A]">Organ</span>isation <br />
            <span className="text-[#333446]">d’événement</span>
          </h2>
          <p className="text-[#6D6767] mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            En vous connectant avec votre compte, vous accéderez à une expérience personnalisée, fluide et entièrement adaptée à vos besoins. Découvrez toutes les fonctionnalités avancées que notre site web met à votre disposition. Connectez-vous dès maintenant pour en profiter pleinement.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button className="bg-[#333446] text-white px-5 py-2.5 sm:px-6 sm:py-3 w-full sm:w-40 rounded-full hover:bg-[#222] transition text-sm sm:text-base">
              Connexion
            </button>
            <button className="bg-[#333446] text-white px-5 py-2.5 sm:px-6 sm:py-3 w-full sm:w-40 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition text-sm sm:text-base">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              Email
            </button>
          </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg lg:ml-8">
          <img src={Image} alt="Réunion" className="w-full h-auto object-contain" />
        </div>
      </div>
      <div className="w-full max-w-7xl h-48 sm:h-64 lg:h-80 bg-[#F8F8F8] mx-auto mb-8 sm:mb-12 rounded-lg shadow-sm"></div>
    </>
  );
}
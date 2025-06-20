import Image from "../assets/vecteezy_impressive-minimalist-white-conference-table-with_57724294.png";
export default function Pagepublic(){
    return (
        <>
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-0 bg-[#ffffff]">
        {/* Texte à gauche */}
        <div className="max-w-xl px-10 text-center lg:text-left">
            <h2 className="text-5xl font-bold text-[#333446]">
            <span className="text-[#FB9E3A]">Organ</span>isation <br />
            <span className="text-[#333446]">d’événement</span>
            </h2>
            <p className="text-[#6D6767] mt-6 text-lg leading-relaxed">
           En vous connectant avec votre compte, vous accéderez à une expérience personnalisée, fluide et entièrement adaptée à vos besoins. Découvrez toutes les fonctionnalités avancées que notre site web met à votre disposition. Connectez-vous dès maintenant pour en profiter pleinement.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-col ml-[2%] sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#333446] text-white px-6 py-3  w-[5cm]  rounded-full hover:bg-[#222]">
                connexion
            </button>
            <button className="bg-[#333446] text-white px-6 py-3 w-[5cm] rounded-full flex items-center gap-2 hover:bg-[#222]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                email
            </button>
            </div>
        </div>

        {/* Image à droite */}
        <div className="mt-10 lg:mt-0 lg:ml-10">
            <img src={Image} alt="Réunion" className="w-[500px] h-[600px] max-w-full" />
        </div>
        </div>
        <div className="container w-[86%] h-[300px] bg-[#F8F8F8] mx-auto mb-[50px]">
        
        </div>
        </>
    );
}
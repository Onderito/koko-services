"use client";

export default function MentionsLegales() {
    return (
        <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto text-[#404040]">
            <h1 className="text-3xl md:text-5xl xl:leading-16 font-manrope-bold mb-8 text-center">
                Mentions Légales & Politique de Confidentialité
            </h1>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Introduction</h2>
                    <p>
                        Devant le développement des nouveaux outils de communication, il est
                        nécessaire de porter une attention particulière à la protection de
                        la vie privée. C’est pourquoi, nous nous engageons à respecter la
                        confidentialité des renseignements personnels que nous collectons.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">
                        Collecte des renseignements personnels
                    </h2>
                    <p>Prénom, Adresse électronique, Numéro de téléphone / télécopieur.</p>
                    <p className="mt-2">
                        Les renseignements personnels que nous collectons sont recueillis au
                        travers de formulaires et grâce à l’interactivité établie entre vous
                        et notre site Web. Nous utilisons également, comme indiqué dans la
                        section suivante, des fichiers témoins et/ou journaux pour réunir
                        des informations vous concernant.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">
                        Formulaires et interactivité
                    </h2>
                    <p>
                        Vos renseignements personnels sont collectés par le biais de
                        formulaires, à savoir :
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Formulaire d'inscription au site Web</li>
                    </ul>
                    <p className="mt-2">
                        Nous utilisons les renseignements ainsi collectés pour les finalités
                        suivantes : Statistiques, Contact
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">
                        Droit d’opposition et de retrait
                    </h2>
                    <p>
                        Nous nous engageons à vous offrir un droit d’opposition et de
                        retrait quant à vos renseignements personnels.
                    </p>
                    <p className="mt-2">
                        Le droit d’opposition s’entend comme étant la possibilité offerte
                        aux internautes de refuser que leurs renseignements personnels
                        soient utilisés à certaines fins mentionnées lors de la collecte.
                    </p>
                    <p className="mt-2">
                        Le droit de retrait s’entend comme étant la possibilité offerte aux
                        internautes de demander à ce que leurs renseignements personnels ne
                        figurent plus, par exemple, dans une liste de diffusion.
                    </p>
                    <p className="mt-2">
                        Pour pouvoir exercer ces droits, vous pouvez :
                        <br /> Code postal : 06000
                        <br /> Courriel :{" "}
                        <a
                            href="mailto:Info@myriviera.fr"
                            className="text-blue-600 hover:underline"
                        >
                            Info@myriviera.fr
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Droit d’accès</h2>
                    <p>
                        Nous nous engageons à reconnaître un droit d’accès et de
                        rectification aux personnes concernées désireuses de consulter,
                        modifier, voire radier les informations les concernant.
                    </p>
                    <p className="mt-2">
                        L’exercice de ce droit se fera :
                        <br /> Code postal : 06000
                        <br /> Courriel :{" "}
                        <a
                            href="mailto:Info@myriviera.fr"
                            className="text-blue-600 hover:underline"
                        >
                            Info@myriviera.fr
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Sécurité</h2>
                    <p>
                        Les renseignements personnels que nous collectons sont conservés
                        dans un environnement sécurisé. Les personnes travaillant pour nous
                        sont tenues de respecter la confidentialité de vos informations.
                    </p>
                    <p className="mt-2">
                        Pour assurer la sécurité de vos renseignements personnels, nous
                        avons recours aux mesures suivantes :
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Protocole SSL</li>
                    </ul>
                    <p className="mt-2">
                        Nous nous engageons à maintenir un haut degré de confidentialité en
                        intégrant les dernières innovations technologiques permettant
                        d’assurer la confidentialité de vos transactions. Toutefois, comme
                        aucun mécanisme n’offre une sécurité maximale, une part de risque
                        est toujours présente lorsque l’on utilise Internet pour transmettre
                        des renseignements personnels.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Législation</h2>
                    <p>
                        Nous nous engageons à respecter les dispositions législatives
                        énoncées dans :
                        <br />
                        <strong>Législation :</strong> Ni le recours au Générateur de
                        politique de confidentialité, ni la politique qui est présentée à la
                        fin du processus ne constituent, en aucun cas, un avis juridique.
                    </p>
                </div>
            </section>
        </div>
    );
}

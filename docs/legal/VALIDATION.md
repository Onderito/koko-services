# Finalisation juridique et confidentialité

Préparation du 19 septembre 2026. Aucun déploiement effectué.

## Éléments repris

Facture fournie : MY NICE TOURS / My Riviera Tours, SIREN 838777787, adresse Le Wagram, 33 rue de Châteauneuf, 06000 Nice, TVA FR16838777787, téléphone société +33650020019. SARL et hébergement Vercel confirmés par le propriétaire. Les données publiques consultées indiquent un capital de 5 000 € et Marie-Pierre Gouliardon comme gérante. La page la désigne donc comme directrice de publication et identifie séparément Ulas Önder pour la conception et la maintenance technique.

## Mentions à finaliser

- Contrôler le capital de 5 000 € et la gérance sur un Kbis/RNE récent lors de la prochaine mise à jour administrative.
- Ajouter l’immatriculation professionnelle VTC applicable dès que le justificatif est disponible.
- Confirmer le prestataire Vercel et ses coordonnées dans le contrat : l’adresse et le téléphone affichés proviennent de https://vercel.com/legal/dmca-policy ; le numéro publié est celui du contact juridique.
- Les conditions déjà confirmées ont été récupérées d’une conversation précédente et intégrées à CGV-DRAFT.md : annulation gratuite jusqu’à cinq jours avant l’heure réservée, prix total dû ensuite, une heure d’attente incluse aux arrivées depuis l’heure réservée, minimum de quatre heures et vingt kilomètres inclus par heure pour les mises à disposition.
- Finaliser CGV-DRAFT.md avec les seules informations encore manquantes : paiement/acompte, dépassements, modification tardive/non-présentation, annulation par le prestataire, assurance et médiateur effectivement conventionné. Le brouillon n’est ni routé, ni exposé comme CGV acceptables dans le site.

## Paramétrage Google à contrôler avant déploiement

- NEXT_PUBLIC_GA_ID pour GA4 et NEXT_PUBLIC_GOOGLE_ADS_ID pour Ads. Ne jamais y mettre des secrets.
- Les IDs directs prennent priorité sur GTM pour éviter des mesures doublées. Vérifier les conversions existantes : si elles reposaient sur GTM, migrer leurs déclencheurs avant d’utiliser le mode direct.
- Sans IDs directs, NEXT_PUBLIC_GTM_ID est chargé seulement si les deux catégories sont acceptées. Les choix partiels ne chargent pas le conteneur inconnu. Auditer toutes ses balises et finalités avant publication ; aucune balise d’un autre fournisseur ne doit être ajoutée sans information/consentement approprié.
- Mode basic : aucun chargement de Google avant accord, sans iframe noscript. Consent Mode v2 envoyé avant configuration.
- Vérifier avec Tag Assistant les quatre états, les conversions et la révocation sur le domaine réel. Aucun compte Google n’a été modifié par cette intervention.
- Configurer et documenter la rétention GA4 dans le compte (proposition : 2 mois pour les données événementielles individuelles), ainsi que les réglages Ads. La durée des cookies n’est pas la durée des données serveur.
- Les préférences locales sont versionnées/horodatées et expirent après 180 jours. Conserver les versions du code et captures du bandeau avec le registre de consentement ; le stockage local seul n’est pas une preuve serveur durable.

## Opérations RGPD hors du site

Les durées proposées dans la politique doivent être appliquées dans la boîte email, Resend, les exports et les outils métier : demandes commerciales au maximum 3 ans après dernier contact pertinent, pièces comptables 10 ans, archives probatoires selon prescription. Aucun effacement automatique de ces services n’a été configuré.

Vérifier contrats de sous-traitance (Vercel, Resend, messagerie, Google), pays de traitement et mécanismes de transfert réellement applicables ; tenir un registre de traitements et prévoir le traitement des demandes d’accès/effacement. Ne pas annoncer de certification RGPD.

## Sources

- https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
- https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ
- https://developers.google.com/tag-platform/security/guides/consent
- https://entreprendre.service-public.gouv.fr/vosdroits/F33527
- https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563156
- https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees

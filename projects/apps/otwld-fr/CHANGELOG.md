# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.3.4](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.3.3...apps-otwld-fr-0.3.4) (2023-02-23)



## [0.3.3](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.3.2...apps-otwld-fr-0.3.3) (2023-02-17)



## [0.3.2](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.3.1...apps-otwld-fr-0.3.2) (2023-01-31)



## [0.3.1](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.3.0...apps-otwld-fr-0.3.1) (2023-01-31)



# [0.3.0](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.2.0...apps-otwld-fr-0.3.0) (2023-01-31)


### Bug Fixes

* **ecosystem/projects:** change docker-publish executor to nx-container ([2b85d6c](https://github.com/otwld/ecosystem/commit/2b85d6ce9ba11aa048ce4cb04f5b127d4b775ed5))
* **libs/shared-models:** fix lint error ([04c02f2](https://github.com/otwld/ecosystem/commit/04c02f24fe0bce40108b8d0fb960fb96c36523fe))


### Features

* **api-otwld-fr/s3:** use signed urls for s3 cause ovh doesn't allow public access ([8612651](https://github.com/otwld/ecosystem/commit/8612651e83142140a0d6519cd25e559f1673d568))
* **api-otwld-fr/scripts:** add script to init database. Correct some models ([2b12ad4](https://github.com/otwld/ecosystem/commit/2b12ad4de46dc7f31c35f5f39b9d1de462925c26))
* **api-otwld-fr/services:** Add service entity & resolver. Implement resource system ([580d82d](https://github.com/otwld/ecosystem/commit/580d82d8bb39c4970ea01858d24d98da25fc12ad))
* **app-otwld-fr/medias:** create medias in api and add them into member's id page ([fe940bb](https://github.com/otwld/ecosystem/commit/fe940bbf1b4ac3db0566c5bc7ae962723371de2c))
* **app-otwld-fr/portfolio:** use query to get data from api. Use api for project data & template. Missing pagination ([f053d23](https://github.com/otwld/ecosystem/commit/f053d23a3835b521c5db04ccf2c72bceb06d8eb2))
* **app-otwld-fr/static:** finally remove all static data from the app. Everything comes from back ([c1baa21](https://github.com/otwld/ecosystem/commit/c1baa216e7c76cb8531abbd8f6f5958498dd2e9f))
* **app-otwld-fr/testimonials:** add testimonials to member's profile page ([8151bec](https://github.com/otwld/ecosystem/commit/8151bec2134a75eb48b0b7ad98cbfe96bac36177))
* **ecosytem/portfolio:** add custom resolveField for next & prev project. Add them in portfolio page ([e323500](https://github.com/otwld/ecosystem/commit/e323500564d150a354cf983a8ba729cf727a9508))
* **otwld-fr/environment:** change url of api for development ([9cf8a47](https://github.com/otwld/ecosystem/commit/9cf8a4754e102f3f94373291c772704c06954334))
* **otwld-fr/member:** add random fetch for member profile if no id in url ([6c6d178](https://github.com/otwld/ecosystem/commit/6c6d17856e955dd56858f1cd5d7db457884fba20))
* **otwld-fr/member:** Add services and location to profile ([816d7c7](https://github.com/otwld/ecosystem/commit/816d7c78e96e6c6acce04d370b5a83f79a441136))
* **otwld-fr/members:** start to use backend data in member's detail page ([64f8772](https://github.com/otwld/ecosystem/commit/64f87725e4587be66728666d9802edd4573d7640))
* **workspace/graphql:** Add codegen to export graphql operations into angular services; configure angular apollo client ([9ff72f3](https://github.com/otwld/ecosystem/commit/9ff72f35548719b120b34a65aac91f94b0737c45))



# [0.2.0](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.1.0...apps-otwld-fr-0.2.0) (2023-01-11)


### Bug Fixes

* **apps-otwld-fr/envs:** add link for templates of portfolio ([79a96a0](https://github.com/otwld/ecosystem/commit/79a96a02b94a7d5fb8467062633d0d050441fb03))


### Features

* **apps-otwld-fr/portfolio:** Add atheme for apain ([db4d597](https://github.com/otwld/ecosystem/commit/db4d597b8e729ba847d60021a3122554dff4d4cd))
* **apps-otwld-fr/portfolio:** Add mesdocteurs for apain ([fbe7410](https://github.com/otwld/ecosystem/commit/fbe74109082821a2f7836ea45ae87045d55bda04))
* **apps-otwld-fr/portfolio:** complete en version for both missions ([08b89bb](https://github.com/otwld/ecosystem/commit/08b89bb8d7b62e3b5c028f4b7c89fd1c5f307967))
* **apps-otwld-fr/testimonials:** Add testimonials for apain ([276a217](https://github.com/otwld/ecosystem/commit/276a217ac40d9991a9dd5a0780bcb5238dedde18))



# [0.1.0](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.20...apps-otwld-fr-0.1.0) (2023-01-03)


### Features

* **apps-otwld-fr/page-portfolio.component:** supprime le position sticky sur la colonne de droite ([e9d26fd](https://github.com/otwld/ecosystem/commit/e9d26fd36b81c044a7ed133cde54a8b087b9d9f0))



## [0.0.20](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.20-alpha.0...apps-otwld-fr-0.0.20) (2022-12-22)



## [0.0.20-alpha.0](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.19...apps-otwld-fr-0.0.20-alpha.0) (2022-12-22)


### Features

* **otwld-fr:** utilisation de inject() à la place du constructeur ([00467e6](https://github.com/otwld/ecosystem/commit/00467e6a622c3d6ce6f73910fa0d38c4ae70773f))



## [0.0.19](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.19-alpha.3...apps-otwld-fr-0.0.19) (2022-12-21)



## [0.0.19-alpha.3](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.19-alpha.2...apps-otwld-fr-0.0.19-alpha.3) (2022-12-21)



## [0.0.19-alpha.2](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.19-alpha.1...apps-otwld-fr-0.0.19-alpha.2) (2022-12-21)



## [0.0.19-alpha.1](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.19-alpha.0...apps-otwld-fr-0.0.19-alpha.1) (2022-12-21)



## [0.0.19-alpha.0](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.18...apps-otwld-fr-0.0.19-alpha.0) (2022-12-20)



## [0.0.18](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.17...apps-otwld-fr-0.0.18) (2022-12-14)



## [0.0.17](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.16...apps-otwld-fr-0.0.17) (2022-12-14)



## [0.0.16](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.15...apps-otwld-fr-0.0.16) (2022-12-14)



## [0.0.15](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.14...apps-otwld-fr-0.0.15) (2022-12-09)



## [0.0.14](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.13...apps-otwld-fr-0.0.14) (2022-12-06)



## [0.0.13](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.12...apps-otwld-fr-0.0.13) (2022-12-05)



## [0.0.12](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.11...apps-otwld-fr-0.0.12) (2022-11-30)



## [0.0.11](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.10...apps-otwld-fr-0.0.11) (2022-11-28)



## [0.0.10](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.9...apps-otwld-fr-0.0.10) (2022-11-28)



## [0.0.9](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.8...apps-otwld-fr-0.0.9) (2022-11-25)



## [0.0.8](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.7...apps-otwld-fr-0.0.8) (2022-11-24)



## [0.0.7](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.6...apps-otwld-fr-0.0.7) (2022-11-22)



## [0.0.6](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.5...apps-otwld-fr-0.0.6) (2022-11-20)



## [0.0.5](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.4...apps-otwld-fr-0.0.5) (2022-11-20)



## [0.0.4](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.3...apps-otwld-fr-0.0.4) (2022-11-16)



## [0.0.3](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.2...apps-otwld-fr-0.0.3) (2022-11-16)



## [0.0.2](https://github.com/otwld/ecosystem/compare/apps-otwld-fr-0.0.1...apps-otwld-fr-0.0.2) (2022-11-11)



## 0.0.1 (2022-11-10)

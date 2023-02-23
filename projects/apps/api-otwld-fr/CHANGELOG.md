# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# [0.2.0](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.1.1...apps-api-otwld-fr-0.2.0) (2023-02-23)


### Features

* **api-otwld-fr/security:** add ttl for requests and health check ([e1f2e4e](https://github.com/otwld/ecosystem/commit/e1f2e4e9ec9f28ef2dc215974fff5eca3e6c0977))



## [0.1.1](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.1.0...apps-api-otwld-fr-0.1.1) (2023-02-17)


### Bug Fixes

* **api-otwld-fr/test:** fix issue with expectError ([1a8d5b0](https://github.com/otwld/ecosystem/commit/1a8d5b05d954435324d59e6752bd48240c1faf57))



# [0.1.0](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.10-alpha.0...apps-api-otwld-fr-0.1.0) (2023-01-31)


### Bug Fixes

* **api-otwld-fr/env:** change keys for environment variables ([184d7c7](https://github.com/otwld/ecosystem/commit/184d7c7b7435260a67a45f402080d6710a9af777))
* **api-otwld-fr/main:** add implicit import for ci ([312232d](https://github.com/otwld/ecosystem/commit/312232d6cf151b70f14fa7668953754f2cbb71a5))
* **api-otwld-fr/projects:** fix previousProject resolver ([5540a89](https://github.com/otwld/ecosystem/commit/5540a89d1657ddb6f25370a2bf9b4699bdd4b03c))
* **charts/api-otwld-fr:** fix MONGO_USERNAME MONGODB_DATABSE url ([8f6aa8a](https://github.com/otwld/ecosystem/commit/8f6aa8a92736866ba424f6e4aa09e88e82716048))
* **ecosystem/projects:** change docker-publish executor to nx-container ([2b85d6c](https://github.com/otwld/ecosystem/commit/2b85d6ce9ba11aa048ce4cb04f5b127d4b775ed5))
* **libs/shared-models:** fix lint error ([453b4b7](https://github.com/otwld/ecosystem/commit/453b4b78e18c6fc3c1742596f30e6feed0f8ffd2))


### Features

* **api-otwld-fr/chore:** Add pagination module and create first list query ([7664a09](https://github.com/otwld/ecosystem/commit/7664a09daf23f5ced2f11a218a7aae6d71e45a5b))
* **api-otwld-fr/main:** add import to prevent bug from nx ([a570dfb](https://github.com/otwld/ecosystem/commit/a570dfb36a42c8a973643afdc0c8ad7b4712ea93))
* **api-otwld-fr/member:** Add social links for members ([f17afaf](https://github.com/otwld/ecosystem/commit/f17afaf42a868d5c77ee52877da09a3363f6f23a))
* **api-otwld-fr/members:** add  missing loader ([1d60c18](https://github.com/otwld/ecosystem/commit/1d60c18e96dc521358bdd4dc120ac7d89a34dd34))
* **api-otwld-fr/members:** add projects in model and create resolver and context resolver ([c405008](https://github.com/otwld/ecosystem/commit/c4050084115d192b183ee7ba370d779ac45d9f32))
* **api-otwld-fr/projects:** add entities, services and resolvers. Link module to app module ([bc4422c](https://github.com/otwld/ecosystem/commit/bc4422cdc9a96c4e3f23e52c47702624537d8598))
* **api-otwld-fr/s3:** use signed urls for s3 cause ovh doesn't allow public access ([8612651](https://github.com/otwld/ecosystem/commit/8612651e83142140a0d6519cd25e559f1673d568))
* **api-otwld-fr/scripts:** add script to init database. Correct some models ([2b12ad4](https://github.com/otwld/ecosystem/commit/2b12ad4de46dc7f31c35f5f39b9d1de462925c26))
* **api-otwld-fr/services:** Add service entity & resolver. Implement resource system ([580d82d](https://github.com/otwld/ecosystem/commit/580d82d8bb39c4970ea01858d24d98da25fc12ad))
* **api-otwld-fr/services:** Add Translation system for resolvers ([717e84d](https://github.com/otwld/ecosystem/commit/717e84d77e8403b083b5df11ac9bc2dcd916c924))
* **api-otwld-fr/skills:** complete member's skills and skills dictionary ([f4463ee](https://github.com/otwld/ecosystem/commit/f4463ee2f9da75c20bb96f557847d58d401be234))
* **api-otwld-fr/workModes:** add work modes and memberWorkModes ([43b39eb](https://github.com/otwld/ecosystem/commit/43b39ebabf42808536464da15d0b542062d8f28c))
* **app-otwld-fr/medias:** create medias in api and add them into member's id page ([fe940bb](https://github.com/otwld/ecosystem/commit/fe940bbf1b4ac3db0566c5bc7ae962723371de2c))
* **app-otwld-fr/portfolio:** use query to get data from api. Use api for project data & template. Missing pagination ([f053d23](https://github.com/otwld/ecosystem/commit/f053d23a3835b521c5db04ccf2c72bceb06d8eb2))
* **app-otwld-fr/static:** finally remove all static data from the app. Everything comes from back ([c1baa21](https://github.com/otwld/ecosystem/commit/c1baa216e7c76cb8531abbd8f6f5958498dd2e9f))
* **app-otwld-fr/testimonials:** add testimonials to member's profile page ([8151bec](https://github.com/otwld/ecosystem/commit/8151bec2134a75eb48b0b7ad98cbfe96bac36177))
* **charts/api-otwld-fr:** Add mongodb service and apain namespace ([11cfe87](https://github.com/otwld/ecosystem/commit/11cfe87d109202cab83087f8396cf4e38a93db96))
* **ecosytem/portfolio:** add custom resolveField for next & prev project. Add them in portfolio page ([e323500](https://github.com/otwld/ecosystem/commit/e323500564d150a354cf983a8ba729cf727a9508))
* **ecosytem/portfolio:** add forgot file ([2b58f8a](https://github.com/otwld/ecosystem/commit/2b58f8a06f40b1f0a2101d00dd25a8e9ab8506d0))
* **otwld-fr/member:** add random fetch for member profile if no id in url ([6c6d178](https://github.com/otwld/ecosystem/commit/6c6d17856e955dd56858f1cd5d7db457884fba20))
* **otwld-fr/member:** Add services and location to profile ([816d7c7](https://github.com/otwld/ecosystem/commit/816d7c78e96e6c6acce04d370b5a83f79a441136))
* **otwld-fr/members:** start to use backend data in member's detail page ([64f8772](https://github.com/otwld/ecosystem/commit/64f87725e4587be66728666d9802edd4573d7640))
* **workspace/graphql:** Add codegen to export graphql operations into angular services; configure angular apollo client ([9ff72f3](https://github.com/otwld/ecosystem/commit/9ff72f35548719b120b34a65aac91f94b0737c45))



## [0.0.10-alpha.0](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.9...apps-api-otwld-fr-0.0.10-alpha.0) (2022-12-20)



## [0.0.9](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.8...apps-api-otwld-fr-0.0.9) (2022-11-30)



## [0.0.8](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.7...apps-api-otwld-fr-0.0.8) (2022-11-28)



## [0.0.7](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.6...apps-api-otwld-fr-0.0.7) (2022-11-25)



## [0.0.6](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.5...apps-api-otwld-fr-0.0.6) (2022-11-24)



## [0.0.5](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.4...apps-api-otwld-fr-0.0.5) (2022-11-22)



## [0.0.4](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.3...apps-api-otwld-fr-0.0.4) (2022-11-20)



## [0.0.3](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.2...apps-api-otwld-fr-0.0.3) (2022-11-16)



## [0.0.2](https://github.com/otwld/ecosystem/compare/apps-api-otwld-fr-0.0.1...apps-api-otwld-fr-0.0.2) (2022-11-11)



## 0.0.1 (2022-11-10)

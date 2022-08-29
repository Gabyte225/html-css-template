// 20220829200228
// https://academy-year-2021.herokuapp.com/week-3/wedding

const attending = [
    {
      "name": "Sidney Hilpert",
      "id": "8bf0064e-c0b5-4ae5-ab0b-710c38f48e6e",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Travon McKenzie",
      "id": "93809abe-4c14-4452-8dd5-99cefd958c56",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Moises Franecki",
      "id": "d9b8d6a7-830f-4d01-8018-6289880f2b4e",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Brain Paucek",
      "id": "43a13566-97cc-42c9-ba9a-45a1573445d7",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Arden Buckridge",
      "id": "b4633466-6c3e-418e-a6a8-7c817efcdf5d",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Fidel Willms",
      "id": "f405ec5d-0761-4c53-a7c4-607dcf2fbb74",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Megane Bergnaum",
      "id": "9b28ad57-e001-4f28-8a17-f81d6f1cf7a2",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Marcos Windler",
      "id": "abbbf46b-457d-4970-8292-287081dc72bc",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Lupe Spencer",
      "id": "b8bf51c7-f7b0-4392-a816-c76e98339317",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Roslyn Herman",
      "id": "0f006888-eb11-48d3-ba41-a673728f1e52",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Gabrielė",
      "id": "36d15fd7-4472-43af-bcf7-ce0ee6afdd13",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Watson Gerhold",
      "id": "fba1a175-3567-408f-82f5-c212c96a9694",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Kory Nader",
      "id": "c2489e1c-af0a-4ea1-81bc-32a0b622114e",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Elian Kuhic",
      "id": "919f5a96-b38a-4a7d-a924-d6136c0ed3b4",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Felipe Schimmel",
      "id": "08a277d3-639b-416f-93b0-8ef5fd09d040",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Easter Spinka",
      "id": "eed76193-f332-4689-8d44-7789dbe50c2c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Dario Breitenberg",
      "id": "3d3be024-14cf-4a99-b378-362e94c1b377",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Green Becker",
      "id": "eebac87b-98e8-4d11-bf8d-ce85b5931f49",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Kelsie Farrell",
      "id": "c8de8151-d913-4be1-9405-1649c89b12d6",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Anna Larson",
      "id": "555ed8cb-e0f1-40b0-846b-e18cd456b9a8",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Laima",
      "id": "64588d88-59e9-476e-980d-910001d392e2",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Hazel Muller",
      "id": "dad4880d-63a0-487f-a06c-290fbe86b90a",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Gladyce Herzog",
      "id": "c0d6bfe8-2e88-4467-92c4-ee7b3dffbe7c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Ali Kilback",
      "id": "378acf8e-fbb6-4fd4-bd8d-aa6d4c15daa5",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Bessie Erdman",
      "id": "77ab1eed-2ab0-46a8-b7c2-a493b13e1314",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Maritza Rippin",
      "id": "09888481-6d36-4ee7-b8a8-ea489ba724a7",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Elmira Murazik",
      "id": "d5d2acc0-a3dd-45b1-a204-d97e90006884",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Ericka DuBuque",
      "id": "b9ecc0ba-9db6-4d17-9ed5-a26de1b1341e",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Ayana Jacobi",
      "id": "d1f0bc3e-b459-4615-a7cf-c2d21e5460ac",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Deion Schoen",
      "id": "e04868b0-3c45-49b3-897e-d8c353f10779",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Edgar",
      "id": "9e328d4e-f1b3-4c3a-bcb3-e2146361b4cd",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Carolyne Luettgen",
      "id": "c1cd74ec-c0ec-403b-b07e-5f04f783aa25",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Tamia Veum",
      "id": "4f4038b5-89ec-4d87-896a-0c5add1d9290",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Cristina Volkman",
      "id": "2ce7ff3e-346a-4607-a5af-f00c1c5bb8bc",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Katelyn Jaskolski",
      "id": "b3dbab65-e237-4872-bcee-d3137b9481e4",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Flavio Bartoletti",
      "id": "d88a532d-5396-4a38-8cc5-2f490e7b573a",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Thora Windler",
      "id": "8ec1fd80-abd8-45ce-b5a3-7638b5d07721",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Ivah Gutmann",
      "id": "5594ee61-b5ee-4ac7-a216-2ffcaa51607e",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Alessandro Volkman",
      "id": "e7fdf2e9-38b6-4746-b5e8-6a9b9a8a5207",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Candelario Beier",
      "id": "4961804d-eb0f-4558-a8eb-cbf293301f41",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Monika",
      "id": "69ca2270-7c43-4a5c-99f4-0eea71f2de68",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Gussie Rice",
      "id": "d86e763b-7742-418e-b0b4-ccb9a3d79fdf",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Nyah Nicolas",
      "id": "3ea98def-efc9-44a1-a7bd-bc3b78cc9e18",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Vivian Cummings",
      "id": "193b0d19-cf2f-4e15-a3b8-8fec1f2b5f9a",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Guadalupe Marks",
      "id": "760755f5-e8f2-4029-b563-385e69cf5605",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Brad Schneider",
      "id": "6313d333-7c0e-4edb-b4db-90e64989bb47",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Obie Medhurst",
      "id": "4a09e84e-cf91-4083-8e22-73090892bad1",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Susie Renner",
      "id": "5f567c00-7e26-448d-a61f-b103958c0a70",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Lukas Christiansen",
      "id": "3f48d40b-1820-4c0e-8c96-cacebcd53761",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Leonel Hegmann",
      "id": "2718a3a9-a743-4138-b917-f448c44d090f",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Mindaugas",
      "id": "cbdb050f-e070-4b94-af1f-4c40d04d9115",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Albina Ortiz",
      "id": "c7091733-4e94-4859-a011-918dd936debd",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Judah Bogisich",
      "id": "ac6d348e-f11b-44c2-a2aa-c21257ca34a1",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Verona Nikolaus",
      "id": "408cdcba-57f3-4765-b1d9-6ccc0654dc02",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Sydni Gorczany",
      "id": "71e573ce-31a6-42a9-ae29-9283022fe097",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Junius Welch",
      "id": "1f80b375-d016-4054-83cd-d729bef62719",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Penelope O'Hara",
      "id": "a5269cf2-43d4-4641-8a44-be3ad4fdc450",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Sasha Wintheiser",
      "id": "2ecc92f5-96f4-4f4f-a348-38da31577349",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Caleb Koepp",
      "id": "c22f81c8-8d80-4ab7-ac33-a5d4414dea3a",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Alphonso Schmeler",
      "id": "ca155397-eafe-4b9b-9128-5989a3d26410",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Urtė",
      "id": "0bfeda88-85f8-43d9-af5f-2ef88df7443a",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Ilene Lind",
      "id": "4fe7521f-0ce2-4eb1-b932-611e3fe9f2db",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Art Ondricka",
      "id": "f08bf6f0-68e8-4c2d-89ea-168f71cebeb4",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Carli Dibbert",
      "id": "43234b7f-1e82-4336-8f86-208a0a8719a6",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Leonel Schultz",
      "id": "72ae78b3-8d41-4179-8335-ca141004678b",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Fausto Gleason",
      "id": "c37e74df-2051-4a78-9ff2-ee9bd8c994e1",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Tre Bernhard",
      "id": "43a1696b-aa30-41be-bb03-d1da15c82aa4",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Ana Huels",
      "id": "004a6625-c92e-43db-9a17-334e12c4e74c",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Rosina Douglas",
      "id": "97bee5a7-bdb8-4630-8630-4eb7641a78b0",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Mittie Schmeler",
      "id": "2b2d1e6a-8a64-46ad-8ff8-311b6c5b7cf7",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Denas",
      "id": "2cf4505c-18fc-4d36-a8a8-555f6428d89e",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Barney Cruickshank",
      "id": "158c247b-4cbf-4522-8466-064ddbb98f82",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "D'angelo Stiedemann",
      "id": "65805e2e-094a-49c9-b302-61af203f29e0",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Kurtis Farrell",
      "id": "d0c4cbd6-ac5b-45d9-95c0-2a459d3529ec",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Pierre Nikolaus",
      "id": "32b8ef97-4145-4481-bc68-d5d6cebc79e2",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Neil Ebert",
      "id": "462a624b-5b38-4e0c-93c7-711bc4f236f0",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Lauren Buckridge",
      "id": "bc8d5521-a1cd-472f-ae11-6a9bd8410b0d",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Curtis Davis",
      "id": "10b45069-d096-40ad-ab83-80f4a29c64ca",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Oswald Stark",
      "id": "f3679e76-393d-4189-94d8-8704423d6e52",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Dewayne Paucek",
      "id": "e2628010-1fc8-4ac7-b2fb-78b8718bc613",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Rolandas",
      "id": "1b7e670b-aa5b-4794-91d4-6ac518652680",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "John Dibbert",
      "id": "76bc69f1-fc4c-4b21-b989-fa7c951b41f1",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Maggie Turcotte",
      "id": "0ce1cd35-d07f-41f6-80ad-f5bb24d4e752",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Edd Hoeger",
      "id": "24b0a9c6-30ce-49db-8a35-6a26abd8c84b",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Hertha Kunde",
      "id": "8f999074-c1d8-4c2d-90a3-caaf9794779c",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Jeffry Bernier",
      "id": "65c87151-bc8f-4375-bdc4-b3a1ccbea022",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Jaylin Abshire",
      "id": "e3d1dbfd-c7e7-42a7-9a4c-6c3a861f6114",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Rodolfo Tremblay",
      "id": "82de79fc-bbe0-4847-a979-410ab43ec95b",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Alda Mann",
      "id": "fe4f28cb-693a-4f10-a3da-a91bb6ebce94",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Lavon Morissette",
      "id": "3113fa4f-afe0-48b2-add5-09c82c931d9c",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Donatas",
      "id": "c362d73b-58f5-4fd2-b86e-c1b53c8d67d1",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Annalise Koepp",
      "id": "da979d61-e25c-4e9a-9478-fe2b2ea3313b",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Ashlynn Mitchell",
      "id": "0374871a-9631-41a0-b91a-a4fa3a777d3e",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Cara Kunde",
      "id": "4e64823e-a56c-4a43-a897-a5aa738b4f5d",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Vergie Lindgren",
      "id": "4227ca1d-1d84-4289-8099-b25de367bbb5",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Jack Upton",
      "id": "d9bda037-c821-4298-88aa-14c55ef8db12",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Anita Senger",
      "id": "4ca6ca8b-35c5-4f86-af7d-19f2062bd8cc",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Reed Bogisich",
      "id": "f87b6392-e757-4f88-97b7-79ed5d1fed9c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Elinor Weber",
      "id": "d1f251a4-a661-49b7-93be-63b26d46da92",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Eli Beatty",
      "id": "4a4e423c-d717-4142-86b5-bc64da14d5a7",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Arnas",
      "id": "0ec933cd-8a05-4ad6-99ea-7f9d3c048be8",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Tyree Jacobs",
      "id": "aca5e0d9-5aa7-4568-a6e3-62252f143914",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Mallory Schuster",
      "id": "b3aff7d3-7974-454f-b139-7a29d686957f",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Mark Kiehn",
      "id": "08410a78-1779-4e79-a13c-1e004daf7456",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Davin Stiedemann",
      "id": "2759dbbe-66d5-494d-aaaf-6af83f58912f",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Merle Moore",
      "id": "e0759b0e-2da6-4fe7-b1f2-f9862823ba81",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Ilene Watsica",
      "id": "f6440daf-9746-4f8c-b7ec-1f57823f4250",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Sidney Kassulke",
      "id": "64a4bc11-8f97-4457-9962-989d38346bca",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Andre O'Conner",
      "id": "38e0aefe-65b8-46c9-a3a5-fe3bcb1a0344",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Kamille Carroll",
      "id": "4edfda92-ca7e-41fb-8b3c-455aa3b1f864",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Aretas",
      "id": "3fdc4a02-ca6d-49c2-818b-8909739f518c",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Briana Denesik",
      "id": "42e11780-5fae-4d72-88bf-0222f8897329",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Rigoberto Will",
      "id": "6c4bbe50-0fbb-4ae2-aee7-7c192814a9f5",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Selina Schuppe",
      "id": "bfc504b4-5f5c-4c02-9bc1-004b2e3c999a",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Isidro Morissette",
      "id": "ac57f065-adeb-407d-91f7-d46f97d91f3c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Prince Zboncak",
      "id": "07ed4cda-0392-4559-852b-f5c77b325536",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Laverne Harris",
      "id": "bb73fdc4-70f2-49ec-ba71-cfa60051d8d0",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Roma Lindgren",
      "id": "5a593b20-208c-493b-9818-c9fcbdda534f",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Edwina Jaskolski",
      "id": "734ba90d-252d-4cfc-9a29-5befa2eafbfd",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Bella Hilll",
      "id": "f47c1d84-b929-40da-9694-02b23dd0a361",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Dainius",
      "id": "bcde777e-6653-4485-985a-3233275eecba",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Grant Jenkins",
      "id": "08db0106-9e88-42a7-9eb7-30c3b6aa594f",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Jesse Kub",
      "id": "92258cb2-748d-41a1-85b4-03e2fc43a8ab",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Payton Schiller",
      "id": "c6fc3801-1c4a-409e-beff-7b54e9ea540c",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Dorcas Mayert",
      "id": "f1aa7950-7e7c-4b82-a224-4b1567b1dbe2",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Yolanda O'Reilly",
      "id": "27ca7a33-af19-428a-9c08-fb185421ff94",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Ferne Waelchi",
      "id": "9cbce814-5a90-45e1-9816-7f17ccfd9386",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Emmie Stamm",
      "id": "d09091f2-561d-4d6c-9846-6f1b0f3dd9a8",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Anne Ullrich",
      "id": "95ae2a8b-0b64-4e9e-9eca-2827262d2d51",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Carlee Runolfsdottir",
      "id": "3773d60b-59c2-4358-af48-2932a5cbe1ca",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Emilija",
      "id": "868d5ad7-0779-4a5b-8fd6-36edf6eba315",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Julie Brown",
      "id": "c78ff9af-ca08-451d-9789-abe8f9a45e14",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Amira Hansen",
      "id": "14442eeb-cb5f-4f57-8cd5-f3cb71323959",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Josue Gottlieb",
      "id": "d3f7cc42-2ba6-4b3d-a5b2-be00b41e6b51",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Devante Marks",
      "id": "a9fca08f-17c3-4a51-a9e3-7792ff7fcd5e",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Shanelle Leuschke",
      "id": "27f3f982-d9d7-4f81-b168-67eb6bca61c4",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Beryl Graham",
      "id": "642aeddf-1286-4ede-bb22-80c993546719",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Vivian Farrell",
      "id": "8267b069-6971-4638-b7fb-6f93fb853fba",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Earl Leuschke",
      "id": "1f9a667c-3f18-465c-a2ee-819fe52f07dc",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Ima Stokes",
      "id": "39df820c-b744-4364-863f-b0bd8d927b0f",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Karina",
      "id": "d898a8fe-d5e0-4b07-965d-143870cfb436",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Cicero Mann",
      "id": "bfb4064a-b9f5-4329-b0cd-be50e2c6e13a",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Alia VonRueden",
      "id": "ad318caf-e9aa-463f-86c9-b1d938d85844",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Sigurd Beatty",
      "id": "e89f7971-753f-43ef-b768-b437ae8a3eea",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Verdie Dibbert",
      "id": "d8d1673a-41c7-4db1-b868-bb42ad2ff1b9",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Brody Labadie",
      "id": "74785d49-1ebc-4f8b-9d45-8a8d059ea2fb",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Elouise Heller",
      "id": "63950b0e-08ef-48c1-9e78-9f5d4a8ef90e",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Lewis Johnson",
      "id": "463ac871-7bd3-4e9f-bf48-8bf76051dcff",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Giles Conroy",
      "id": "18b76e07-759d-4ede-ad16-66c0ac43b76d",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Claudine Schaden",
      "id": "b54335aa-aeeb-4f08-8417-75fd7a1f32b0",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Karolis",
      "id": "ec6ac460-79fe-4afe-9912-595e577e1a82",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Adaline Corkery",
      "id": "7a720e02-e52c-44bb-8d3d-0272e3f27a4d",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Louie Kreiger",
      "id": "e851e5fe-8165-4348-8a78-fa175532e0aa",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Buck Mertz",
      "id": "48090b83-127e-42a5-b255-745cf689df2c",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Zachariah White",
      "id": "eaf517da-1b15-4550-85d6-03a7461509d3",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Flavio Treutel",
      "id": "6c27d265-32e9-4f71-98c2-7e6a9f098682",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Dante Steuber",
      "id": "548a332b-9c85-428e-8af3-e834010016f4",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Emelie Pouros",
      "id": "e8da461c-65f3-47cf-b87e-f7b8c41b01ff",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Hertha Witting",
      "id": "1625540d-6dd5-4419-8b68-a14254c08e1f",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Quinten Legros",
      "id": "35b27c53-6a40-4212-abad-027a45970347",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Kristoferis",
      "id": "4d481835-f184-4b0b-988b-f1e1beb0eb84",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Brooks Monahan",
      "id": "c5a1acf1-6767-446b-8f69-308844674baa",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Francesca Watsica",
      "id": "a303f4f6-bb82-4812-a50b-53f1581caecd",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Connie Wunsch",
      "id": "f8c1093a-3819-466d-b409-ced4dc8f9880",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Tracy Larson",
      "id": "280ea72c-5fd3-470a-82ad-9ec449b26ff0",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Warren Reichel",
      "id": "51c6f8f7-c32b-43c4-9ac3-1db55ac7b35b",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Eldora Klein",
      "id": "c2f48906-c14e-4987-9cac-89c145ee5b93",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Cali Jacobson",
      "id": "6616b754-3243-4a03-881f-c5dabbfa7488",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Lesly Auer",
      "id": "071ff996-2189-4a90-a2df-42103e07a068",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Davion Beer",
      "id": "0b6201d0-2929-42b6-977f-2e1391df3116",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Markas Martinas",
      "id": "724d2967-8a0b-4690-be73-4be12b203764",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Kari Keebler",
      "id": "9b83e116-d971-4665-b7f3-1779c67ed3ae",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Dorothy Daugherty",
      "id": "cc911147-8d8c-4dac-bec8-a84ee7a0651e",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Daniella Lockman",
      "id": "553fc7e0-1835-4bbf-8df4-bfe36829de99",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Maybell Luettgen",
      "id": "372d31fd-70d4-4f52-9f27-7f00bc3dc095",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Ubaldo Sipes",
      "id": "d8b18d50-7577-411b-9bc3-8c7b98586e81",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Reid Rogahn",
      "id": "1117d1e5-836b-4549-9c62-3f66a5f00914",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Liam Senger",
      "id": "b388768c-3f92-40a1-8c31-d74d18f4dde4",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Stacey Yost",
      "id": "04cd4540-0dd8-442d-b223-bd3f9eb6c53a",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Milo Weimann",
      "id": "12317794-bd18-4623-9d7e-679a487af4ef",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Matas",
      "id": "bd95e068-07c1-4602-af3a-cdec2639b313",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Halie Beahan",
      "id": "fc2fec6e-864c-483b-b0e8-41170f7e0fb5",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Brandt Rutherford",
      "id": "72cf22ea-08a2-45da-8c33-599cc73efd55",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Emmet Mayer",
      "id": "bf1b1ed8-3e86-41f5-9ac2-1c5b4a06e2c3",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Brooklyn Nader",
      "id": "c7d8d827-0b45-4e6b-93ce-70a362a13164",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Nadia Hammes",
      "id": "f3769a33-4256-44b0-8c3a-d71c70565892",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Tyrese Anderson",
      "id": "2f8d278f-c24c-442e-922a-eba254396998",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Jack Pfeffer",
      "id": "95013ebb-d073-408c-9ede-c77033bd0c76",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Shaylee Schiller",
      "id": "dc5c9d27-bce3-4216-b89a-3f84afcc55d6",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Amparo Stokes",
      "id": "8266ce57-6af0-488c-8e27-a1079e3038ee",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Nerijus",
      "id": "79471327-172a-4ff7-839b-5a01e3e91888",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Cleveland Schroeder",
      "id": "e64f2b6b-019e-437c-9be7-63212aa094a4",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Delbert Brown",
      "id": "fc174651-3794-4dfd-8a75-bb6787210e37",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Gerhard Kiehn",
      "id": "b58572b5-c63f-48b0-ac33-1437a090975b",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Mariana Hane",
      "id": "1960bfe7-bf6e-44b2-b552-f2bb5011c14f",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Kattie Schimmel",
      "id": "f4c22161-65d7-446b-92ae-8ea8e2afd3d8",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Felix Gulgowski",
      "id": "de6dc387-6081-43e5-9b4c-9fa83384d52e",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Dean Gibson",
      "id": "b0e637ac-2a95-46ae-a5be-429e61b772a4",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Braden Ernser",
      "id": "84bda857-19b7-416f-a536-290a14a15baf",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Reba Gottlieb",
      "id": "8668bd78-8a44-41a1-b543-3760d34bd9ae",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Paulius",
      "id": "7634dd6e-5413-4b57-9a22-3cada0ab5567",
      "plusOne": true,
      "attending": true
    },
    {
      "name": "Amy Murray",
      "id": "0d278a8a-685b-4460-aee4-b563541d0e0c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Whitney Reinger",
      "id": "4090948a-f8cf-4a2f-b77b-8212dedc1e1c",
      "plusOne": true,
      "attending": false
    },
    {
      "name": "Will Lang",
      "id": "7a19b206-8506-49f0-8386-c43dc2fa85da",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Mikel Kilback",
      "id": "b06d8154-a78f-4441-9048-cf6b97b27930",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Brian Hane",
      "id": "8fae1558-368a-44c8-8eba-a2cd56ef850c",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Elwyn Nader",
      "id": "223767e6-e2c9-4bba-8a99-31d32664e6ea",
      "plusOne": false,
      "attending": true
    },
    {
      "name": "Rosemary Gusikowski",
      "id": "9f8b6cb5-a824-4ba5-b13a-e7719a06378e",
      "plusOne": false,
      "attending": false
    },
    {
      "name": "Treva Schimmel",
      "id": "a201a698-3b6d-4236-8f4d-ab4fd2570cc6",
      "plusOne": true,
      "attending": true
    }
  ];

console.log(attending.some(item => item.attending));
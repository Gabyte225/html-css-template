// 20220829200044
// https://academy-year-2021.herokuapp.com/week-3/party

const vipName = [
    {
      "name": "Adalberto Hand",
      "id": "72aca172-779e-46c1-93e2-fefcadbcb8bb",
      "vip": true,
      "attending": false
    },
    {
      "name": "Pedro Hagenes",
      "id": "9fc83a4c-2aa8-4049-a6ff-182403825ff4",
      "vip": true,
      "attending": true
    },
    {
      "name": "Ernie Kub",
      "id": "94f01787-c0f7-4b99-b074-7df4378e50d1",
      "vip": false,
      "attending": false
    },
    {
      "name": "Dorothea McClure",
      "id": "862ba2e8-6f22-475a-8eff-a4abf2134ec6",
      "vip": true,
      "attending": true
    },
    {
      "name": "Everette Gottlieb",
      "id": "3aa82eaf-0978-4cb6-bd7d-180bbe4d5a3f",
      "vip": true,
      "attending": false
    },
    {
      "name": "Celine Hermann",
      "id": "3c8f0eb9-6ddf-41cf-a313-08c071ba4c23",
      "vip": false,
      "attending": true
    },
    {
      "name": "Wendy Hauck",
      "id": "936afc68-2aa5-4088-bca6-5d5acd5db2a8",
      "vip": true,
      "attending": true
    },
    {
      "name": "Kory Miller",
      "id": "dcb5bec9-9ef5-4769-95ea-ac9b8b50926f",
      "vip": true,
      "attending": true
    },
    {
      "name": "Aurelio Rowe",
      "id": "98434a6a-79ef-4957-b246-01f917bf5fa2",
      "vip": true,
      "attending": false
    },
    {
      "name": "Rubie Waelchi",
      "id": "18fff7d0-b355-492d-96c0-2eaceb99bc83",
      "vip": true,
      "attending": true
    },
    {
      "name": "Gabrielė",
      "id": "e82d2e87-8594-4d6e-80b4-cbc88ff66257",
      "vip": true,
      "attending": true
    },
    {
      "name": "Stephan Koepp",
      "id": "aa25b17b-9914-4aea-9153-b62262293ec5",
      "vip": true,
      "attending": false
    },
    {
      "name": "Lacy Mraz",
      "id": "2b401604-52de-41af-8e7d-61ee9931d3cb",
      "vip": false,
      "attending": false
    },
    {
      "name": "Rosanna Wilkinson",
      "id": "c595f09b-b76f-4909-a133-07db4774cfb0",
      "vip": false,
      "attending": false
    },
    {
      "name": "Frederic Schoen",
      "id": "477dbae0-4fca-4b67-aada-02693e4e3eb4",
      "vip": false,
      "attending": false
    },
    {
      "name": "Lavinia Kub",
      "id": "19ebb05f-023d-47b7-b117-3d3261be923b",
      "vip": false,
      "attending": true
    },
    {
      "name": "Gail Zieme",
      "id": "7ce63a43-9d58-46ef-afdb-2b66fb348715",
      "vip": false,
      "attending": false
    },
    {
      "name": "Mekhi Von",
      "id": "20fe4504-cbb0-46b2-b7d8-58c0568d1847",
      "vip": false,
      "attending": false
    },
    {
      "name": "Boris Pagac",
      "id": "e568e113-52b0-4ac9-a292-df6b8f74f24a",
      "vip": false,
      "attending": true
    },
    {
      "name": "Agustina Reichert",
      "id": "2834ef9c-f369-48ca-b9ad-5ba6a85ad916",
      "vip": false,
      "attending": true
    },
    {
      "name": "Laima",
      "id": "ceec38ff-e53c-4a3d-b921-72d251255e05",
      "vip": true,
      "attending": true
    },
    {
      "name": "Matteo Rohan",
      "id": "1d0043cc-4539-42b6-9aa3-c47bd00d2750",
      "vip": true,
      "attending": false
    },
    {
      "name": "Kathryne Fritsch",
      "id": "d60e8606-3389-4839-9ef5-cbfb33f59e20",
      "vip": true,
      "attending": true
    },
    {
      "name": "Kelton Runolfsson",
      "id": "2e0804c9-0e9b-4d05-8c76-90b45f9d6dac",
      "vip": false,
      "attending": true
    },
    {
      "name": "Dock Cartwright",
      "id": "311d3b9d-d96e-491e-87b5-cd738ce247c1",
      "vip": false,
      "attending": false
    },
    {
      "name": "Millie Bradtke",
      "id": "5d3ddafd-b170-420d-8696-f288419c70fc",
      "vip": false,
      "attending": true
    },
    {
      "name": "Geoffrey Hagenes",
      "id": "d69daf8b-4dcd-4641-a38a-105673581db4",
      "vip": false,
      "attending": true
    },
    {
      "name": "Ramona Johnson",
      "id": "b5c03ad4-ac3c-4e5f-8729-c04c1f888ed4",
      "vip": false,
      "attending": true
    },
    {
      "name": "Eulah Cartwright",
      "id": "029df88e-43f5-4477-80bc-157b0c66306e",
      "vip": false,
      "attending": true
    },
    {
      "name": "Kallie Kreiger",
      "id": "22794077-2421-4175-b416-1b07a112e08a",
      "vip": true,
      "attending": true
    },
    {
      "name": "Edgar",
      "id": "8298857e-8f41-4443-814b-ab89a71b986d",
      "vip": true,
      "attending": true
    },
    {
      "name": "Cierra Spencer",
      "id": "0337fcc8-31fc-4292-8fc9-d2d0aead11ff",
      "vip": false,
      "attending": true
    },
    {
      "name": "Edythe Hessel",
      "id": "79b80447-ebfb-4d7c-b691-d93fbe8c9956",
      "vip": true,
      "attending": false
    },
    {
      "name": "Carolyne Carroll",
      "id": "5bc12393-4a41-462e-8d50-bd7d961bb980",
      "vip": true,
      "attending": false
    },
    {
      "name": "Monserrat Cruickshank",
      "id": "81d19506-79f1-491e-9156-db104980fffe",
      "vip": true,
      "attending": false
    },
    {
      "name": "Vincent Kunze",
      "id": "6f0f8673-869e-4e2f-8510-b69b8b264a8d",
      "vip": true,
      "attending": true
    },
    {
      "name": "Anya Corwin",
      "id": "472945e5-d6d0-4e21-9b25-ba2aa1598b86",
      "vip": true,
      "attending": true
    },
    {
      "name": "Mitchell Collier",
      "id": "5da5ef03-bb09-43c0-9918-8ead71645a05",
      "vip": false,
      "attending": true
    },
    {
      "name": "Amari Kassulke",
      "id": "23c7e3de-9a24-425d-95ad-ad978baa96f4",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jayme Morar",
      "id": "449f1314-f865-452e-b22c-c6c31dbc942f",
      "vip": false,
      "attending": true
    },
    {
      "name": "Monika",
      "id": "d0de4278-2ee6-4a7e-9ad0-337fb1199b96",
      "vip": true,
      "attending": true
    },
    {
      "name": "Dayton Schuster",
      "id": "5a1f5120-3bb2-47ae-ac35-408fa5d75418",
      "vip": true,
      "attending": true
    },
    {
      "name": "Otis Hammes",
      "id": "bbe3861a-0bb6-4b31-a146-cce1c5b8b3f5",
      "vip": false,
      "attending": true
    },
    {
      "name": "Alba Fay",
      "id": "7f513c6f-fdf6-4ec7-8200-a2caced2a030",
      "vip": false,
      "attending": false
    },
    {
      "name": "Kory Greenholt",
      "id": "f35f2ebb-fc28-456b-b25d-2ab8e51a1acc",
      "vip": true,
      "attending": true
    },
    {
      "name": "Abelardo Blanda",
      "id": "f293493e-0c54-40a4-abf5-d72890f71a7a",
      "vip": false,
      "attending": false
    },
    {
      "name": "Curt Spencer",
      "id": "b916a497-c735-40c1-b11b-91678f875028",
      "vip": true,
      "attending": true
    },
    {
      "name": "Nicolette Ryan",
      "id": "a98a8064-b10d-4ac0-911d-a175ff38ef65",
      "vip": false,
      "attending": true
    },
    {
      "name": "Audie Hane",
      "id": "65617b00-ce46-473b-8f6b-8cdd92fb949f",
      "vip": true,
      "attending": false
    },
    {
      "name": "Markus Witting",
      "id": "4485fb3a-51bc-4e72-9832-2683ae8d1d00",
      "vip": true,
      "attending": true
    },
    {
      "name": "Mindaugas",
      "id": "50970fa8-ad28-48c4-a9f8-1b5e130bbb6d",
      "vip": true,
      "attending": true
    },
    {
      "name": "Myrtle Simonis",
      "id": "a4d0e32b-e2a4-4eaf-957f-f948884bb225",
      "vip": true,
      "attending": false
    },
    {
      "name": "Katherine Fritsch",
      "id": "ae3d210a-97e2-42a4-a47f-82dd3a71e235",
      "vip": false,
      "attending": true
    },
    {
      "name": "Maritza Schimmel",
      "id": "89f95193-28f5-4391-9054-a759f99a5d90",
      "vip": false,
      "attending": false
    },
    {
      "name": "Kameron Sauer",
      "id": "de3373fa-e336-4b56-bd45-11163c671685",
      "vip": false,
      "attending": false
    },
    {
      "name": "Lafayette McLaughlin",
      "id": "4b4fe6cc-7a07-4e71-a6f4-019baad60d07",
      "vip": true,
      "attending": false
    },
    {
      "name": "Eloy Volkman",
      "id": "64562b34-2e10-49ea-a585-7743e80421ba",
      "vip": true,
      "attending": true
    },
    {
      "name": "Roderick McLaughlin",
      "id": "37797e8a-a364-41d5-b95e-47b92307cc35",
      "vip": true,
      "attending": true
    },
    {
      "name": "Allison Runte",
      "id": "c2f5d122-dd2a-4e12-a369-f5de389a4703",
      "vip": false,
      "attending": true
    },
    {
      "name": "Lucinda Thiel",
      "id": "d6928417-099c-444b-9e6c-39a803c36a44",
      "vip": false,
      "attending": true
    },
    {
      "name": "Urtė",
      "id": "835fdc2d-92bf-44ac-9f40-bf41091e38d5",
      "vip": true,
      "attending": true
    },
    {
      "name": "Ashleigh Osinski",
      "id": "7651f5b0-af7e-4c75-bb14-4a2675b34cff",
      "vip": false,
      "attending": false
    },
    {
      "name": "Abagail Runolfsson",
      "id": "632ee2d9-87d5-4c55-840a-804bcac36e43",
      "vip": false,
      "attending": false
    },
    {
      "name": "Joey Bosco",
      "id": "912f06fa-2ab3-481f-b0f3-9f44c35f7312",
      "vip": true,
      "attending": true
    },
    {
      "name": "Adelia Cassin",
      "id": "764d7529-921e-49d7-bb89-cbd9d2efc107",
      "vip": true,
      "attending": false
    },
    {
      "name": "Khalid Stiedemann",
      "id": "feb6d1bb-f9fe-445a-8d00-f7a67057c26a",
      "vip": false,
      "attending": false
    },
    {
      "name": "Dawson Kessler",
      "id": "c1250730-82e2-4d7c-a458-ef1311e6c7f0",
      "vip": false,
      "attending": false
    },
    {
      "name": "Dennis Koch",
      "id": "7c74c392-5b1d-499b-9eff-a6365d7a06dd",
      "vip": true,
      "attending": false
    },
    {
      "name": "Elena Cartwright",
      "id": "fdfafdbe-002b-48eb-825f-b7c95b22aa76",
      "vip": false,
      "attending": true
    },
    {
      "name": "Aniya Wisozk",
      "id": "34b2ec52-ff73-426b-b006-298dc147a81f",
      "vip": true,
      "attending": false
    },
    {
      "name": "Denas",
      "id": "642f8984-127a-4ce8-9b43-59402f67402f",
      "vip": true,
      "attending": true
    },
    {
      "name": "Bertrand Price",
      "id": "e63da830-4314-4e8b-aa08-5d4fa5e2a432",
      "vip": true,
      "attending": false
    },
    {
      "name": "Reinhold Daugherty",
      "id": "e94e3a46-0199-4c80-9266-92661b300256",
      "vip": true,
      "attending": true
    },
    {
      "name": "Karley Stroman",
      "id": "444de7d3-a5bf-4e58-91ec-3af137b5eaf8",
      "vip": true,
      "attending": true
    },
    {
      "name": "Naomie Mills",
      "id": "983187ca-fc12-41e1-95fd-1361ee816e2c",
      "vip": false,
      "attending": false
    },
    {
      "name": "Jessyca Rice",
      "id": "75d9f292-f926-4a6a-8fd9-38f6f934231f",
      "vip": false,
      "attending": true
    },
    {
      "name": "Ladarius Bergnaum",
      "id": "bafb5999-7e99-4a1c-bed1-b2ccad06d36d",
      "vip": false,
      "attending": false
    },
    {
      "name": "Antwan Runolfsson",
      "id": "b2cde002-1488-44c5-a66b-c80d14655a56",
      "vip": false,
      "attending": true
    },
    {
      "name": "Baby Stokes",
      "id": "fa43bfeb-1c62-4571-851b-a562a655d913",
      "vip": true,
      "attending": true
    },
    {
      "name": "Eric Veum",
      "id": "bad3337c-55e8-4869-88d1-a2d4604a9975",
      "vip": true,
      "attending": false
    },
    {
      "name": "Rolandas",
      "id": "3ab8c6f0-1fbd-42e8-be8a-042637b2cac0",
      "vip": true,
      "attending": true
    },
    {
      "name": "Travon Bauch",
      "id": "a85bc359-3ca9-4a78-9164-6ed3c6ec7dee",
      "vip": false,
      "attending": false
    },
    {
      "name": "Barrett Howe",
      "id": "273d144b-db6c-4bca-911a-73536df2bea0",
      "vip": true,
      "attending": false
    },
    {
      "name": "Tyson Cronin",
      "id": "b3db0ecf-a3fb-4666-b617-b6fdec4a2575",
      "vip": true,
      "attending": false
    },
    {
      "name": "Kelly Pouros",
      "id": "dddf7b8a-76a0-45c9-a027-7f80f82d400a",
      "vip": false,
      "attending": false
    },
    {
      "name": "Evie Heidenreich",
      "id": "fbef36f4-c2ba-45f2-b75c-31fe16ff7e14",
      "vip": true,
      "attending": false
    },
    {
      "name": "Josiane Witting",
      "id": "3c82a951-9a72-49f0-adf8-d4427da327e6",
      "vip": false,
      "attending": false
    },
    {
      "name": "Leta Bernhard",
      "id": "207b6383-73c8-498a-b110-ef84eacfcd4b",
      "vip": false,
      "attending": false
    },
    {
      "name": "Bell Boyle",
      "id": "dfddc4e6-6aa1-4b4e-856e-eb9af5312e40",
      "vip": true,
      "attending": true
    },
    {
      "name": "Reina Hagenes",
      "id": "dc356ec5-f9e9-4d97-95f4-5546ed145bf6",
      "vip": true,
      "attending": true
    },
    {
      "name": "Donatas",
      "id": "b134913c-f63e-477f-b451-28572fbd2ae9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Avery Daugherty",
      "id": "1839c70c-9c57-4deb-ba72-c02b246d4555",
      "vip": false,
      "attending": true
    },
    {
      "name": "Stan Little",
      "id": "1038b7cd-5b06-4a07-b6f1-42bf48ff81cc",
      "vip": false,
      "attending": false
    },
    {
      "name": "Jenifer Breitenberg",
      "id": "ffff4f38-1980-4ad5-b057-87280668692b",
      "vip": false,
      "attending": false
    },
    {
      "name": "Sincere Ledner",
      "id": "9b50fef3-0ef6-4ccd-81e7-10420fdf3acb",
      "vip": true,
      "attending": true
    },
    {
      "name": "Jamel Kilback",
      "id": "635f5711-35e8-44b5-9312-d8f95282c24e",
      "vip": false,
      "attending": false
    },
    {
      "name": "Mekhi Kiehn",
      "id": "a30dc26a-33bd-4ca5-8cc9-35b2140a641d",
      "vip": true,
      "attending": true
    },
    {
      "name": "Gudrun Hagenes",
      "id": "3cae66d3-f0ba-42e4-950e-0bd0f805c022",
      "vip": true,
      "attending": true
    },
    {
      "name": "Ozella Sauer",
      "id": "3a98c4c8-1b79-45d2-991b-dd18599bae06",
      "vip": true,
      "attending": false
    },
    {
      "name": "Maia Rippin",
      "id": "320ecc83-482c-4c3c-9d80-cb36692c37f3",
      "vip": true,
      "attending": false
    },
    {
      "name": "Arnas",
      "id": "2a4d2bf9-a86f-4522-b788-b1585738e5a0",
      "vip": true,
      "attending": true
    },
    {
      "name": "Katelin Keeling",
      "id": "30b7b100-6001-4424-884f-4856e808fed5",
      "vip": false,
      "attending": true
    },
    {
      "name": "Americo Champlin",
      "id": "3fbd8598-baec-4ff9-9392-95eb986ef4e1",
      "vip": true,
      "attending": false
    },
    {
      "name": "Alec Hilll",
      "id": "e8feb4d5-b850-458a-a195-e9d1dbd94ad2",
      "vip": true,
      "attending": true
    },
    {
      "name": "Yoshiko Tremblay",
      "id": "0fb58d5b-6a53-4940-aa0d-68114239bb9d",
      "vip": true,
      "attending": false
    },
    {
      "name": "Margaret Hermiston",
      "id": "bcd6a7c5-e370-4504-bf38-34bbf3b6d7f2",
      "vip": false,
      "attending": false
    },
    {
      "name": "Trisha Maggio",
      "id": "2c992b16-d4e2-461a-a7ee-633c39331f68",
      "vip": true,
      "attending": true
    },
    {
      "name": "Janelle Gaylord",
      "id": "5540c669-baea-4ff7-9ff6-ebd065c8cbc5",
      "vip": false,
      "attending": false
    },
    {
      "name": "Wilford Smitham",
      "id": "6d2d90ce-05ea-4124-8571-19941af6b550",
      "vip": false,
      "attending": true
    },
    {
      "name": "Bart Schamberger",
      "id": "be46a77d-cc88-4c9f-b24a-790d6abc38b8",
      "vip": true,
      "attending": true
    },
    {
      "name": "Aretas",
      "id": "f89ebd2c-9152-4c59-a964-3cf6e53d17d9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Stone Jacobs",
      "id": "5c33cfe2-633b-4aff-a077-7fb41acb1970",
      "vip": false,
      "attending": true
    },
    {
      "name": "Litzy Gleichner",
      "id": "57b64136-b322-4d86-9144-fcc306e9e6fb",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jaime Kuphal",
      "id": "786810d8-cd75-4221-9266-1aa11b05b338",
      "vip": false,
      "attending": false
    },
    {
      "name": "Antonina Smith",
      "id": "935bfbcf-b6dd-4820-8139-f642f921f9c7",
      "vip": true,
      "attending": false
    },
    {
      "name": "Janis Schmitt",
      "id": "085595ff-0ce3-41cd-8f67-22ba396a94d3",
      "vip": false,
      "attending": true
    },
    {
      "name": "Deshaun Schaden",
      "id": "8791c802-e175-4cd8-9717-dc33235c2935",
      "vip": false,
      "attending": true
    },
    {
      "name": "Kaycee Koepp",
      "id": "1c541478-2ea2-4912-ba56-d88b9bbe5900",
      "vip": true,
      "attending": true
    },
    {
      "name": "Gust Heathcote",
      "id": "ea2b1d01-5f70-491e-92b1-3a0b74b8f7a8",
      "vip": false,
      "attending": false
    },
    {
      "name": "Edwina Turner",
      "id": "c3f14059-40f6-41e9-94da-d73d44a456f0",
      "vip": true,
      "attending": false
    },
    {
      "name": "Dainius",
      "id": "8628aec1-8bb3-4799-afc3-f94debabbc7e",
      "vip": true,
      "attending": true
    },
    {
      "name": "Kenton Schmitt",
      "id": "862f194b-7cf1-44a5-aaf0-6d1bfac69d80",
      "vip": true,
      "attending": true
    },
    {
      "name": "Kim Sawayn",
      "id": "28219141-86a7-4a88-8e6c-ae2427379652",
      "vip": true,
      "attending": false
    },
    {
      "name": "Loyal Murazik",
      "id": "6c6ed0fc-4bc2-46c1-b544-a0b4bf07eb15",
      "vip": false,
      "attending": false
    },
    {
      "name": "Troy Bradtke",
      "id": "bd037633-c420-4d02-b29b-103032619a36",
      "vip": true,
      "attending": false
    },
    {
      "name": "Ona Luettgen",
      "id": "a9a02ed0-7200-4be9-bbce-09c3b398b25d",
      "vip": false,
      "attending": true
    },
    {
      "name": "Toby Hegmann",
      "id": "19c7af6e-defb-4dfb-993d-073abb0a89b9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Hulda Runte",
      "id": "342c4acc-4a13-4d5f-bcab-f3cf73a418d6",
      "vip": true,
      "attending": true
    },
    {
      "name": "Leonard Daugherty",
      "id": "cd4a6129-755d-4664-bbeb-8d19dd73ad9b",
      "vip": true,
      "attending": false
    },
    {
      "name": "Casimir Gibson",
      "id": "6ade0d2c-8a02-41e4-b7cd-47dcb4a74255",
      "vip": false,
      "attending": false
    },
    {
      "name": "Emilija",
      "id": "5885124f-f5d2-4e0d-b850-f3ec86a8acb9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Anjali Kub",
      "id": "246c9689-fff1-4180-aadc-3162244adac8",
      "vip": false,
      "attending": true
    },
    {
      "name": "Alejandra Schinner",
      "id": "2b7b8d8f-8020-42f1-abb5-35e4454ca509",
      "vip": false,
      "attending": false
    },
    {
      "name": "Alyson Littel",
      "id": "a02fe0db-ef73-4ab6-b4ce-8df5d3ea354e",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jamir Welch",
      "id": "37d94647-215d-455b-8459-c6d7b73143d2",
      "vip": false,
      "attending": true
    },
    {
      "name": "Mozell Paucek",
      "id": "1ea5d92a-80aa-411d-8d4a-7b06001d42f9",
      "vip": true,
      "attending": false
    },
    {
      "name": "Kenton Kerluke",
      "id": "4dcc7152-5c8e-4faf-99f4-c91fe59c254a",
      "vip": false,
      "attending": true
    },
    {
      "name": "Laney Dickens",
      "id": "1f81871e-6aef-408d-80cb-8d0f2b8a23a3",
      "vip": false,
      "attending": false
    },
    {
      "name": "Jessy Keeling",
      "id": "1f599d3d-4aca-407e-9626-80bb2d141e23",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jacynthe Corwin",
      "id": "a54a6b93-d6ec-4eed-99c1-1545a1d61435",
      "vip": false,
      "attending": false
    },
    {
      "name": "Karina",
      "id": "2dada307-7ab1-473f-a0f8-0f3c32cce4a9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Ryleigh Wintheiser",
      "id": "a5dc9fb6-aeda-4094-bc9b-ca383d8459b9",
      "vip": false,
      "attending": false
    },
    {
      "name": "Neal Bayer",
      "id": "677fa70e-de58-44bc-8453-999a24ad1c5b",
      "vip": false,
      "attending": false
    },
    {
      "name": "Landen Tromp",
      "id": "66e84ccb-f521-4bd6-8dfe-6e661de98db1",
      "vip": true,
      "attending": false
    },
    {
      "name": "Fanny Leffler",
      "id": "21ba53a6-884e-47fd-9e90-85505d8e893e",
      "vip": true,
      "attending": true
    },
    {
      "name": "Benton Toy",
      "id": "1f1dedb8-37ea-438a-9ec1-12ae27e541ee",
      "vip": true,
      "attending": false
    },
    {
      "name": "Orie Bechtelar",
      "id": "03b96769-9e25-48c4-9e38-df62e3150548",
      "vip": false,
      "attending": false
    },
    {
      "name": "Blake Rippin",
      "id": "3b8e495d-f90f-43b3-8b81-cace7cc1aa91",
      "vip": true,
      "attending": true
    },
    {
      "name": "Santos Ratke",
      "id": "d96fab0f-2823-4728-b386-600f22a77b1a",
      "vip": false,
      "attending": false
    },
    {
      "name": "Clemens Cummings",
      "id": "923c20cc-888a-4032-ae6d-b5c28957f1c3",
      "vip": false,
      "attending": true
    },
    {
      "name": "Karolis",
      "id": "bdaec814-2f57-43ce-90ca-548367ab3778",
      "vip": true,
      "attending": true
    },
    {
      "name": "Odie Breitenberg",
      "id": "939407a3-c074-4f84-9a1a-f3be946cabb2",
      "vip": true,
      "attending": true
    },
    {
      "name": "Vivienne Batz",
      "id": "83821f42-4737-4966-84d6-08717e48a060",
      "vip": false,
      "attending": true
    },
    {
      "name": "Ali Schumm",
      "id": "10e985d5-b202-426e-874d-6fafe91c13a1",
      "vip": true,
      "attending": true
    },
    {
      "name": "Nellie Huels",
      "id": "adaa6482-128d-4f89-8dcf-0f2f72865579",
      "vip": true,
      "attending": false
    },
    {
      "name": "Enos Kohler",
      "id": "30e36a5a-8fb3-400f-a29b-a233f6934c0f",
      "vip": true,
      "attending": true
    },
    {
      "name": "Jerrod Boyer",
      "id": "812628f7-c4ae-463c-b846-2c0c275a7d33",
      "vip": false,
      "attending": false
    },
    {
      "name": "Janiya O'Reilly",
      "id": "ff83bbd1-c14e-454d-929d-503463dfa0f0",
      "vip": true,
      "attending": false
    },
    {
      "name": "Harmon Lemke",
      "id": "a643a932-7cf5-4e27-b5e2-a5fcb25cc3b5",
      "vip": true,
      "attending": false
    },
    {
      "name": "Webster Towne",
      "id": "635e8cd9-b6cc-4c4e-8a41-8437922d5851",
      "vip": false,
      "attending": true
    },
    {
      "name": "Kristoferis",
      "id": "f3a63b3e-a1cd-4556-ae17-eb00f10e0ce9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Adolfo Lindgren",
      "id": "9e6c2990-9cf3-4b6d-bf0c-54d82b2a6937",
      "vip": false,
      "attending": true
    },
    {
      "name": "Marcia Fay",
      "id": "bb1c9b4d-7e78-4bf9-83c1-b9ce33420b0a",
      "vip": true,
      "attending": false
    },
    {
      "name": "Junior Hagenes",
      "id": "e61b7927-8b79-47b4-8187-af8e2cb7d0ee",
      "vip": true,
      "attending": false
    },
    {
      "name": "Margaret Hermiston",
      "id": "4d36680b-96e1-44a9-870d-993bf53a4814",
      "vip": false,
      "attending": true
    },
    {
      "name": "Lawson Reichert",
      "id": "e9a35ea0-0ecd-493d-9f75-db5164168f69",
      "vip": false,
      "attending": true
    },
    {
      "name": "Aron Pouros",
      "id": "5f688059-1199-42dd-8333-e1a5ebd8fa76",
      "vip": false,
      "attending": false
    },
    {
      "name": "Alicia Breitenberg",
      "id": "b4892d8f-35a0-4f21-bcba-250bcfb8679b",
      "vip": true,
      "attending": true
    },
    {
      "name": "Norbert Gibson",
      "id": "e3c2a9f1-96bf-4378-98d2-a39f7216a39e",
      "vip": false,
      "attending": true
    },
    {
      "name": "Garrett Friesen",
      "id": "2752145b-8d1e-48e2-840e-3994ecb1b9a5",
      "vip": true,
      "attending": true
    },
    {
      "name": "Markas Martinas",
      "id": "5565b002-cf7a-4ef4-a519-f280e8167be5",
      "vip": true,
      "attending": true
    },
    {
      "name": "Dorothea Kohler",
      "id": "1fca4149-940a-476e-84bd-ceee8cc0e6db",
      "vip": false,
      "attending": false
    },
    {
      "name": "Dallin Morissette",
      "id": "f201cfc8-a0dd-4f77-abe9-3392dcbb1ea5",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jay Weissnat",
      "id": "8ffd480d-0f81-4a93-a3b6-0e5ff395c059",
      "vip": true,
      "attending": false
    },
    {
      "name": "Jennifer Larson",
      "id": "67ddb7d1-2a7c-4554-8ff6-3ed56b7b579d",
      "vip": true,
      "attending": false
    },
    {
      "name": "Ludwig Kulas",
      "id": "6fadf8ff-9538-432a-afde-2438e8ac0237",
      "vip": false,
      "attending": true
    },
    {
      "name": "Brent Stracke",
      "id": "e005a553-3581-49aa-a719-8a7bd5b5ca9d",
      "vip": true,
      "attending": false
    },
    {
      "name": "Catalina Macejkovic",
      "id": "a4d0f9b2-90dc-48c6-bc77-dd597ae2d1f8",
      "vip": true,
      "attending": false
    },
    {
      "name": "Mina Bergnaum",
      "id": "975638b2-13ed-430e-8265-120960eaec4c",
      "vip": true,
      "attending": false
    },
    {
      "name": "Sabrina Brown",
      "id": "ae07e965-2075-4dfa-9d64-549faeba2bc1",
      "vip": true,
      "attending": true
    },
    {
      "name": "Matas",
      "id": "a9dec8ac-1599-4c01-93bf-9ab05f83621b",
      "vip": true,
      "attending": true
    },
    {
      "name": "Adolfo Schaden",
      "id": "2ec261fb-8de9-491c-924c-106b70697788",
      "vip": false,
      "attending": false
    },
    {
      "name": "Gay Nienow",
      "id": "b87c49e0-4c38-478e-bbd1-755d6030d48a",
      "vip": false,
      "attending": true
    },
    {
      "name": "Ramiro Lowe",
      "id": "e92b76ce-ddd7-4268-b11f-8c2a18dd6cac",
      "vip": true,
      "attending": true
    },
    {
      "name": "Arlo Rohan",
      "id": "30ddbc6b-3e44-49ec-99d0-5eba36a1b421",
      "vip": false,
      "attending": false
    },
    {
      "name": "Turner Goldner",
      "id": "6872e916-0db3-40a6-b38a-9dfed56c36d7",
      "vip": true,
      "attending": true
    },
    {
      "name": "Elyssa Thiel",
      "id": "20463423-d7db-4566-8fed-4c36475492cb",
      "vip": false,
      "attending": true
    },
    {
      "name": "Rossie Lueilwitz",
      "id": "9f09f585-e173-4821-a114-ee181e24a833",
      "vip": true,
      "attending": true
    },
    {
      "name": "Blake Bednar",
      "id": "dce4235f-4442-45ae-9f5d-83cf45f07fa5",
      "vip": true,
      "attending": false
    },
    {
      "name": "Mckenzie Wehner",
      "id": "6034cf11-a69c-4354-b593-3921ff4e647e",
      "vip": true,
      "attending": true
    },
    {
      "name": "Nerijus",
      "id": "34773f11-a9ff-49ad-8eeb-7cfacc8e0ded",
      "vip": true,
      "attending": true
    },
    {
      "name": "Angie Hickle",
      "id": "29b1f517-c749-4667-bcc7-73ebe411c43a",
      "vip": false,
      "attending": false
    },
    {
      "name": "Brody Daniel",
      "id": "4920c5ae-b4a5-4b86-b0db-4237247f9bca",
      "vip": false,
      "attending": false
    },
    {
      "name": "Jonatan Wilderman",
      "id": "67585cf6-9be1-444c-9315-38ec6f3bed86",
      "vip": false,
      "attending": true
    },
    {
      "name": "Esmeralda D'Amore",
      "id": "cf4aee13-ed4e-408f-ab9a-6e23f7423715",
      "vip": true,
      "attending": true
    },
    {
      "name": "Keenan Blanda",
      "id": "4b439c8b-b2e4-487e-8707-004c39bd7bf9",
      "vip": true,
      "attending": true
    },
    {
      "name": "Melissa Hilpert",
      "id": "dfe15e4f-9ff7-4aea-a225-7eec69855d59",
      "vip": true,
      "attending": false
    },
    {
      "name": "Sylvia Gulgowski",
      "id": "3ac3bebb-3c95-4532-ae16-c1b739dd5ca4",
      "vip": true,
      "attending": true
    },
    {
      "name": "Carlos Marvin",
      "id": "617d206d-fe05-4b7e-aead-16f712f5cf0f",
      "vip": false,
      "attending": false
    },
    {
      "name": "Kay Corwin",
      "id": "4db0ade1-6095-496c-8745-9de9e0413e44",
      "vip": true,
      "attending": true
    },
    {
      "name": "Paulius",
      "id": "95937728-d5bf-4d15-8ab1-f1d7ea086bd4",
      "vip": true,
      "attending": true
    },
    {
      "name": "Leonie Kuhn",
      "id": "a7a084af-5cfd-4d77-88a5-6e95d624863e",
      "vip": false,
      "attending": false
    },
    {
      "name": "Breanna Franecki",
      "id": "54c1aa8c-f1af-4b3d-b275-15ea07efe568",
      "vip": true,
      "attending": false
    },
    {
      "name": "Beau Prohaska",
      "id": "37b2a21d-7f7d-4664-8d77-7e8d48c1c05d",
      "vip": false,
      "attending": false
    },
    {
      "name": "Franz Harvey",
      "id": "4743f0ac-99fd-4aaa-a9b6-2ef40bcdb5ee",
      "vip": false,
      "attending": true
    },
    {
      "name": "Kaycee Lockman",
      "id": "ee761fdf-7ef9-4e84-9789-18167ab0c051",
      "vip": false,
      "attending": false
    },
    {
      "name": "Frances Bergnaum",
      "id": "57ee8ff3-c715-4ce0-87bc-31ca6c18c9fd",
      "vip": true,
      "attending": false
    },
    {
      "name": "Prudence Wiegand",
      "id": "1c6929c8-74cb-4538-b85e-87916469974c",
      "vip": false,
      "attending": true
    },
    {
      "name": "Jett Moore",
      "id": "488af1ce-17c0-4eac-aee0-bd6020e53987",
      "vip": true,
      "attending": false
    }
];

console.log(vipName.some(item => item.name.includes('Gabrielė') && item.vip));
console.log(vipName.some(item => item.name.includes('Giedrė') && item.vip));
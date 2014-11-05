angular.module("myApp")
  .factory("myService", myService);

  var testData = [
    {
      "_id": "545a0ad3be6b11fc45bad950",
      "isActive": true,
      "balance": "$2,315.20",
      "age": 35,
      "eyeColor": "blue",
      "name": "Corine Randolph",
      "gender": "female",
      "company": "PROGENEX",
      "email": "corinerandolph@progenex.com",
      "phone": "+1 (824) 550-3803",
      "address": "236 Hawthorne Street, Morriston, Louisiana, 7919",
      "about": "Magna ipsum ipsum aliqua deserunt ex cillum tempor nostrud anim id amet duis elit. Duis laborum aliquip non adipisicing cupidatat exercitation in cupidatat adipisicing enim enim dolor esse. Dolor fugiat non laborum est eu commodo est nostrud est amet.\r\n"
    },
    {
      "_id": "545a0ad30489b71e90f854cf",
      "isActive": false,
      "balance": "$2,136.71",
      "age": 31,
      "eyeColor": "blue",
      "name": "Dorsey Mendoza",
      "gender": "male",
      "company": "SULFAX",
      "email": "dorseymendoza@sulfax.com",
      "phone": "+1 (901) 586-2582",
      "address": "755 Sackett Street, Sandston, Texas, 9792",
      "about": "Ea pariatur cupidatat culpa fugiat magna cupidatat nulla sit commodo reprehenderit consequat. Laboris ex ut sint laborum. In nisi ut laboris irure Lorem ipsum dolor ipsum. Sunt voluptate sunt cillum culpa sint ad non nisi ad consequat. Reprehenderit anim ut ea id aliquip. Est magna elit laboris anim non consequat enim incididunt amet labore. Ex id qui cillum consectetur proident voluptate sunt consequat laborum labore.\r\n"
    },
    {
      "_id": "545a0ad3a7bddbef5b62564c",
      "isActive": true,
      "balance": "$3,101.11",
      "age": 39,
      "eyeColor": "blue",
      "name": "Dominguez Griffin",
      "gender": "male",
      "company": "BOILCAT",
      "email": "dominguezgriffin@boilcat.com",
      "phone": "+1 (929) 427-2344",
      "address": "712 Midwood Street, Sutton, Colorado, 1766",
      "about": "Commodo sunt occaecat ex ex sit. Elit ad velit aliquip occaecat. Voluptate fugiat incididunt exercitation ea adipisicing officia quis laboris aute commodo in ipsum tempor. Sunt qui laborum et cupidatat amet proident Lorem et eiusmod ut. Lorem sint officia voluptate ad ea. Nisi duis mollit pariatur magna duis adipisicing est. Irure in minim eiusmod dolor laborum voluptate.\r\n"
    },
    {
      "_id": "545a0ad3f2bcf9dedc44b4ec",
      "isActive": true,
      "balance": "$1,777.50",
      "age": 35,
      "eyeColor": "blue",
      "name": "Leola Newton",
      "gender": "female",
      "company": "SOLGAN",
      "email": "leolanewton@solgan.com",
      "phone": "+1 (982) 536-2722",
      "address": "556 National Drive, Biddle, Maine, 5373",
      "about": "Irure aute pariatur cupidatat irure voluptate Lorem voluptate dolor incididunt reprehenderit. Excepteur mollit duis in aliquip pariatur et incididunt dolore amet nisi commodo laboris. Nostrud fugiat aliquip consequat consequat laboris proident culpa magna consequat ut reprehenderit cupidatat dolor laborum. Laborum proident ullamco ullamco incididunt esse laborum nostrud. Laborum anim tempor culpa excepteur dolore nisi exercitation ullamco qui. Ipsum exercitation excepteur officia esse minim cillum eiusmod deserunt aute exercitation irure proident aliqua.\r\n"
    },
    {
      "_id": "545a0ad3cf93d707a022e97b",
      "isActive": false,
      "balance": "$3,753.33",
      "age": 30,
      "eyeColor": "brown",
      "name": "Tucker Solis",
      "gender": "male",
      "company": "AQUACINE",
      "email": "tuckersolis@aquacine.com",
      "phone": "+1 (885) 562-3450",
      "address": "188 Bergen Court, Coventry, Alaska, 6385",
      "about": "Nisi est nulla non officia excepteur. Ea irure ipsum amet et laboris id excepteur aliquip sit est ea exercitation ipsum nulla. Commodo sint cillum culpa esse irure nisi. Aliqua ea nostrud magna commodo exercitation ex duis est excepteur est. Cillum qui occaecat dolor deserunt ex cupidatat.\r\n"
    },
    {
      "_id": "545a0ad3070d1c4e4014761f",
      "isActive": true,
      "balance": "$2,097.52",
      "age": 40,
      "eyeColor": "blue",
      "name": "Naomi Wheeler",
      "gender": "female",
      "company": "TELEQUIET",
      "email": "naomiwheeler@telequiet.com",
      "phone": "+1 (864) 430-3894",
      "address": "995 Macdougal Street, Catharine, Rhode Island, 5833",
      "about": "Commodo eu fugiat incididunt ipsum laborum. Non dolor nostrud laborum est culpa nostrud eiusmod do dolore pariatur cillum. Exercitation Lorem aute id est mollit enim. Laborum proident enim in est cupidatat laboris exercitation proident quis occaecat. Aute pariatur cillum non cillum.\r\n"
    },
    {
      "_id": "545a0ad3c9879e7f01cb31b5",
      "isActive": true,
      "balance": "$3,641.60",
      "age": 40,
      "eyeColor": "blue",
      "name": "Annie Frazier",
      "gender": "female",
      "company": "HYDROCOM",
      "email": "anniefrazier@hydrocom.com",
      "phone": "+1 (935) 503-3740",
      "address": "192 Bridge Street, Crumpler, South Dakota, 5388",
      "about": "Enim sit occaecat aliquip reprehenderit consectetur laborum aute. Officia enim amet esse cillum mollit enim ex id amet ullamco commodo. Proident irure eiusmod anim eiusmod proident. Elit consectetur labore qui deserunt non amet exercitation. Commodo cupidatat enim dolor culpa et qui eiusmod. Dolore esse veniam consectetur qui amet occaecat mollit.\r\n"
    }
  ];

  function myService() {
      return {
        getTestData: function() {
          return testData;
        }
      }
  }

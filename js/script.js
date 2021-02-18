let app = new Vue ({
  el : "#app",
  data : {
    courses : [
      {
        img : "course-02-480x298.jpg",
        price : "$20.00",
        avatar : "73ee246daf47502812ccefc84bf02898.jpeg",
        avatarname : "Blanche Fields",
        description : "Learning to Write as a Professional Author",
        lessons : "20 Lessons",
        students : "50 Stundets",
      },

      {
        img : "stock-full-hd-03-480x298.jpg",
        price : "$26.00",
        avatar : "d0d504142acfde820eef2f11feea6253.jpeg",
        avatarname : "Maggie Strickland",
        description : "Customer-centric Info-Tech Strategies",
        lessons : "24 Lessons",
        students : "769 Stundets",
      },

      {
        img : "stock-full-hd-04-480x298.jpg",
        price : "$29.00",
        avatar : "d0d504142acfde820eef2f11feea6253.jpeg.jpeg",
        avatarname : "Maggie Strickland",
        description : "Open Programming Courses for Everyone: Python",
        lessons : "17 Lessons",
        students : "62 Stundets",
      },

      {
        img : "stock-full-hd-06-480x298.jpg",
        price : "$26.00",
        avatar : "73ee246daf47502812ccefc84bf02898.jpeg",
        avatarname : "Blanche Fields",
        description : "Academic Listening and Note-taking",
        lessons : "14 Lessons",
        students : "67 Stundets",
      },

      {
        img : "course-02-480x298.jpg",
        price : "$39.00",
        avatar : "73ee246daf47502812ccefc84bf02898.jpeg",
        avatarname : "Blanche Fields",
        description : "Master jQuery in a Short Period of Time",
        lessons : "6 Lessons",
        students : "51 Stundets",
      },

      {
        img : "course-02-480x298.jpg",
        price : "$59.00",
        avatar : "73ee246daf47502812ccefc84bf02898.jpeg",
        avatarname : "Blanche Fields",
        description : "Introduction to Javascript for Beginners",
        lessons : "14 Lessons",
        students : "76 Stundets",
      }
    ],

    choices : [
      {
        title : "Multiple Platforms Supported for Teaching & Studying",
        text : "MaxCoach supports the act of teaching and learning on multipleplatforms like online or offline via material downloads. We know thingsaren't supposed to be devoured in a short time, you can always accessour knowledge base from any device."
      },

      {
        title : "Multiple Platforms Supported for Teaching & Studying",
        text : "MaxCoach supports the act of teaching and learning on multipleplatforms like online or offline via material downloads. We know thingsaren't supposed to be devoured in a short time, you can always accessour knowledge base from any device."
      },

      {
        title : "Multiple Platforms Supported for Teaching & Studying",
        text : "MaxCoach supports the act of teaching and learning on multipleplatforms like online or offline via material downloads. We know thingsaren't supposed to be devoured in a short time, you can always accessour knowledge base from any device."
      }
    ],
    visibile: 'hidden',
  },
  methods : {
    dropDown(){
      this.visibile = ( this.visibile == 'hidden' ) ? 'show' : 'hidden';
    }
  }
});

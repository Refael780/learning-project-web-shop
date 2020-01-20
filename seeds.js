const mongoose = require('mongoose');
const Product = require('./models/Product');

const data = [
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'נעלי אדידס',
    image: [
      'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80',
      'https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80'
    ],
    price: '30.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'סט סכום יוקרתי',
    image: [
      'https://images.unsplash.com/photo-1517953720815-3ad3488a67f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=695&q=80',
      'https://images.unsplash.com/photo-1554883364-853dc154b886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    ],
    price: '15.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'נעלי אדידס',
    image: [
      'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80',
      'https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80'
    ],
    price: '30.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'סט סכום יוקרתי',
    image: [
      'https://images.unsplash.com/photo-1517953720815-3ad3488a67f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=695&q=80',
      'https://images.unsplash.com/photo-1554883364-853dc154b886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    ],
    price: '15.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'נעלי אדידס',
    image: [
      'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80',
      'https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80'
    ],
    price: '30.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'סט סכום יוקרתי',
    image: [
      'https://images.unsplash.com/photo-1517953720815-3ad3488a67f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1531633488719-eb4d6511d158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=695&q=80',
      'https://images.unsplash.com/photo-1554883364-853dc154b886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    ],
    price: '15.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  },
  {
    name: 'מצעי ורדינון',
    image: [
      'https://images.unsplash.com/photo-1562407029-850d57c239d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80',
      'https://images.unsplash.com/photo-1563006755-5d7c8e27cf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80'
    ],

    price: '45.00$',
    description:
      'היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות'
  }
];

async function seedDB() {
  await Product.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Remove All Product');
      //add new Product
      data.forEach(function(seed) {
        Product.create(seed, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log('Product created: ' + seed.name);
          }
        });
      });
    }
  });
}

module.exports = seedDB;

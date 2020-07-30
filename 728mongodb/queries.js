db


// 1.
db.restaurants.find()


// 2.
db.restaurants.find(
    {},
    {restaurant_id:1, name:1, borough:1, cuisine:1 }
) 


// 3.
db.restaurants.find(
    {},
    {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 }
)


// 4.
db.restaurants.find(
    {},
    {restaurant_id:1, name:1, borough:1, "address.zipcode":1, _id:0 }
)


// 5.
db.restaurants.find({
    "borough":"Bronx"
})


// 6.
db.restaurants.find({
    "borough":"Bronx"
}).limit(5)


// 7.
db.restaurants.find({
    "borough":"Bronx"
}).skip(5).limit(5)


// 8.
db.restaurants.find({
    "grades.score":{$gt:90}
})


// 9.
db.restaurants.find({
    "grades.score":{$gt:80,$lt:100}
})


// 10.
db.restaurants.find({
    "address.coord.0":{$lt:-95.754168}
})


// 11.
db.restaurants.find({
    $and:[
    {'cuisine':{$not:/American/}},
    {'grades.score':{$gt:70}},
    {'address.coord.0':{$lt:-65.754168}}
    ]
})

// 12.
db.restaurants.find({
    'cuisine':{$not:/American/},
    'grades.score':{$gt:70},
    'address.coord.0':{$lt:-65.754168}
})


// 13.
db.restaurants.find({
    'cuisine':{$not:/American/},
    'grades.grade':'A',
    'borough':{$ne:'Brooklyn'}
}).sort({cuisine:-1})


// 14.
db.restaurants.find(
{'name':{$regex: /^Wil/,}},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)


// 15.
db.restaurants.find(
{'name':{$regex: /ces$/,}},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)


// 16.
db.restaurants.find(
{'name': /.*Reg.*/},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
) 


// 17.
db.restaurants.find(
{'borough': 'Bronx',
'cuisine':{$in:['American','Chinese']}
})


// 18.
db.restaurants.find(
{'borough':{$in:['Staten Island ','Queens','Bronx', 'Brooklyn']}
},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)


// 19.
db.restaurants.find(
{'borough':{$nin:['Staten Island ','Queens','Bronx', 'Brooklyn']}
},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)


// 20.
db.restaurants.find(
{'grades.score':{$not:{$gt:10}}},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)


// 21.
db.restaurants.find(
{$or:[{'cuisine':{$nin:[/American/,/Chinese/]}},{'name':/^Wil/}]},
{restaurant_id:1,name:1,borough:1,cuisine:1 }
)

// 22.
db.restaurants.find(
    {'grades.grade':'A',
     'grades.score':11,
     'grades.date':ISODate('2014-08-11T00:00:00Z')},
    {restaurant_id:1,name:1,grades:1 }
)

// 23.
db.restaurants.find(
    {'grades.1.grade':'A',
     'grades.1.score':9,
     'grades.1.date':ISODate('2014-08-11T00:00:00Z')},
    {restaurant_id:1,name:1,grades:1 }
)

// 24.
db.restaurants.find(
    {'address.coord.1':{$gt:42, $lte:52}},
    {restaurant_id:1,name:1,address:1 }
)

// 25.
db.restaurants.find().sort({name:1})


// 26.
db.restaurants.find().sort({name:-1})

// 27.
db.restaurants.find().sort({cuisine:1,borough:-1})

// 28.
db.restaurants.find(
{ 'address.street':{$exists:true}  }
)

// 29.
db.restaurants.find(
{ 'address.coord':{$type:1}  }
)

// 30.
db.restaurants.find(
    {'grades.score':{$mod:[7,0]}},
    {restaurant_id:1,name:1,grades:1 }
)

// 31.
db.restaurants.find(
    {'name':{$regex:/.*mon.*/i}},
    {name:1,borough:1,'address.coord':1,cuisine:1 }
)
// db.restaurants.find(
//     {'name':{$regex:/.*mon.*/,$options:'si'}},
//     {name:1,borough:1,'address.coord':1,cuisine:1 }
// )
// 

// 32.
db.restaurants.find(
    {'name':{$regex:/^Mad.*/i}},
    {name:1,borough:1,'address.coord':1,cuisine:1 }
)

module.exports ={
    "database":{
         "host": "localhost",
         "port": 3306,
         "user": "root",
         "password": "12345a",
         "database": "myproject"
    },
    "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
      }
 };
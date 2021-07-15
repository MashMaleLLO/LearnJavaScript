const prompt = require('prompt-sync')()
const print = n => {console.log(n)}
let Male = 
{
    "Age" : 21,
    "Sex" : "male",
    "School" : "SG",
    "Car" : 
    {
        "Brand" : "Ford",
        "Type" : "Mustang",
        "Wheel" : "Four"
    }

}

print(Male.Age)
print(Male.Sex)
print(Male.School)
print(Male.Car.Type)
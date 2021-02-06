const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);
// Map(2) {"id" => 3, "name" => "本田"}
// [[Entries]]
// 0: {"id" => 3}
// key: "id"
// value: 3
// 1: {"name" => "本田"}
// key: "name"
// value: "本田"

console.log(myMap.get('name'));
// 本田

const valueList = myMap.values();

for( value of valueList) {
  console.log(value);
}
// 3
// 本田

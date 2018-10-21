$(function() {
  $.getJSON('petfinder_date.json')
    .then((result) => {

      const petsArray = result.petfinder.pets.pet;

      console.log(petsArray);


      const RabbitArray = petsArray.map((animal) => {
        return {
          name: animal.name.$t,
          age: animal.age.$t,
          size: animal.size.$t,
          type: animal.animal.$t
        }

      });
      console.log(RabbitArray);

      const noDogs = petsArray.filter(pet => {

        const isNotDog = pet.animal.$t !== "Dog";
        return isNotDog;

      }).map(pet => {
        const name = pet.name.$t;
        return name;
      });

      console.log(noDogs);



      const noCats = petsArray.filter(pet => {

        const isNotCat = pet.animal.$t !== "Cat";
        return isNotCat;

      }).map(pet => {
        const name = pet.name.$t;
        return name;
      });

      console.log(noCats);


      const Rabbit = petsArray.filter(pet => {

        const isRabbit = pet.animal.$t == "Rabbit";
        return isRabbit;

      }).map(pet => {
        const name = pet.name.$t;
        return name;
      });

      console.log(Rabbit);



    });
});

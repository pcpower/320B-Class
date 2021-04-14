import people from './people.json';

people.forEach(function (person, firstName, lastName, email, phone) {
  const names = person.name.split(' ');
  
  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
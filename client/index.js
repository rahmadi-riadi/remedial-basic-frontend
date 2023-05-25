const usersCards = document.getElementById('users');


async function fecthUsers() {
    try{
        const response = await fetch('http://localhost:3333/users');
        const users = await response.json();

        users.forEach((user) => {
           // dom sesuai template
           const Card = document.createElement('div');
           Card.className = 'card bg-white rounded-lg shadow-lg mb-4';
// dom image
          const image = document.createElement('img')
          image.className = 'w-full h-32 sm:h-48 object-cover rounded-t-lg';
          image.src = user.image;
          image.alt ="User Image";

        const cardBody = document.createElement('div')
        cardBody.className = 'p-4';
//dom nama
        const name = document.createElement('h2');
        name.className = 'text-lg font-semibold';
        name.innerText = `${user.firstName} ${user.lastName}`;
//dom gender
        const gender = document.createElement('p');
        gender.className = 'text-sm mt-2';
        gender.innerHTML = `${user.gender}`;

        cardBody.appendChild(gender);
//dom email

    const email = document.createElement('p')
    email.className = 'text-sm mt-2';
    email.innerHTML = `${user.email}`;
    cardBody.appendChild(email);

    //dom phone
    const phone = document.createElement('p')
        phone.className = 'text-sm mt-1';
        phone.innerHTML = `${user.phone}`;
        cardBody.appendChild(phone);

        cardBody.appendChild(name);
        Card.appendChild(image);
        Card.appendChild(cardBody);
        usersCards.appendChild(Card);
        });
        } catch(error){
            console.error(error);
        }
    }

    fecthUsers()


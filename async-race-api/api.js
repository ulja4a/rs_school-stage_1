const baseUrl = 'http://127.0.0.1:3000';

const path = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
}

const getDefaultCars = async () => {
    const data = await fetch(`${baseUrl}${path.garage}`);
    const cars = await data.json();

    console.log(cars);
}

getDefaultCars();
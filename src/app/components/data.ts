// Data for the cars list

export type Car = {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    fuelType: string;
    status: string;
};

export const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'Make', uid: 'make', sortable: true },
    { name: 'Model', uid: 'model', sortable: true },
    { name: 'Year', uid: 'year', sortable: true },
    { name: 'Color', uid: 'color', sortable: true },
    { name: 'Price', uid: 'price', sortable: true },
    { name: 'Fuel Type', uid: 'fuelType', sortable: true },
    { name: 'Status', uid: 'status', sortable: true }
];

export const statusOptions = [
    { name: 'Available', uid: 'available' },
    { name: 'Sold', uid: 'sold' },
    { name: 'Pending', uid: 'pending' }
];


export const cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Corolla',
        year: 2019,
        color: 'Black',
        price: 15000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 2,
        make: 'Honda',
        model: 'Civic',
        year: 2018,
        color: 'White',
        price: 20000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 3,
        make: 'Ford',
        model: 'Fiesta',
        year: 2017,
        color: 'Red',
        price: 18000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 4,
        make: 'BMW',
        model: 'X5',
        year: 2019,
        color: 'Blue',
        price: 30000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 5,
        make: 'Chevrolet',
        model: 'Camaro',
        year: 2018,
        color: 'Yellow',
        price: 25000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 6,
        make: 'Nissan',
        model: 'Altima',
        year: 2017,
        color: 'Green',
        price: 19000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 7,
        make: 'Hyundai',
        model: 'Elantra',
        year: 2019,
        color: 'Black',
        price: 17000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 8,
        make: 'Kia',
        model: 'Optima',
        year: 2018,
        color: 'White',
        price: 21000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 9,
        make: 'Suzuki',
        model: 'Swift',
        year: 2017,
        color: 'Red',
        price: 16000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 10,
        make: 'Toyota',
        model: 'Camry',
        year: 2019,
        color: 'Blue',
        price: 23000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 11,
        make: 'Honda',
        model: 'Accord',
        year: 2018,
        color: 'Yellow',
        price: 22000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 12,
        make: 'Ford',
        model: 'Focus',
        year: 2017,
        color: 'Green',
        price: 20000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 13,
        make: 'BMW',
        model: 'X3',
        year: 2019,
        color: 'Black',
        price: 32000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 14,
        make: 'Chevrolet',
        model: 'Impala',
        year: 2018,
        color: 'White',
        price: 27000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 15,
        make: 'Nissan',
        model: 'Maxima',
        year: 2017,
        color: 'Red',
        price: 21000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 16,
        make: 'Hyundai',
        model: 'Sonata',
        year: 2019,
        color: 'Blue',
        price: 19000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 17,
        make: 'Kia',
        model: 'Soul',
        year: 2018,
        color: 'Yellow',
        price: 20000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 18,
        make: 'Suzuki',
        model: 'Vitara',
        year: 2017,
        color: 'Green',
        price: 18000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 19,
        make: 'Toyota',
        model: 'Yaris',
        year: 2019,
        color: 'Black',
        price: 15000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 20,
        make: 'Honda',
        model: 'Fit',
        year: 2018,
        color: 'White',
        price: 20000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 21,
        make: 'Ford',
        model: 'Fusion',
        year: 2017,
        color: 'Red',
        price: 18000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 22,
        make: 'BMW',
        model: 'X6',
        year: 2019,
        color: 'Blue',
        price: 30000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 23,
        make: 'Chevrolet',
        model: 'Malibu',
        year: 2018,
        color: 'Yellow',
        price: 25000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 24,
        make: 'Nissan',
        model: 'Sentra',
        year: 2017,
        color: 'Green',
        price: 19000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 25,
        make: 'Hyundai',
        model: 'Accent',
        year: 2019,
        color: 'Black',
        price: 17000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 26,
        make: 'Kia',
        model: 'Sportage',
        year: 2018,
        color: 'White',
        price: 21000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 27,
        make: 'Suzuki',
        model: 'Celerio',
        year: 2017,
        color: 'Red',
        price: 16000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 28,
        make: 'Toyota',
        model: 'Avalon',
        year: 2019,
        color: 'Blue',
        price: 23000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 29,
        make: 'Honda',
        model: 'HR-V',
        year: 2018,
        color: 'Yellow',
        price: 22000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 30,
        make: 'Ford',
        model: 'Escape',
        year: 2017,
        color: 'Green',
        price: 20000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 31,
        make: 'BMW',
        model: 'X4',
        year: 2019,
        color: 'Black',
        price: 32000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 32,
        make: 'Chevrolet',
        model: 'Cruze',
        year: 2018,
        color: 'White',
        price: 27000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 33,
        make: 'Nissan',
        model: 'Rogue',
        year: 2017,
        color: 'Red',
        price: 21000,
        fuelType: 'Petrol',
        status: 'pending'
    },
    {
        id: 34,
        make: 'Hyundai',
        model: 'Tucson',
        year: 2019,
        color: 'Blue',
        price: 19000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 35,
        make: 'Kia',
        model: 'Rio',
        year: 2018,
        color: 'Yellow',
        price: 20000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 36,
        make: 'Suzuki',
        model: 'Baleno',
        year: 2017,
        color: 'Green',
        price: 18000,
        fuelType: 'Petrol',
        status: 'available'
    },
    {
        id: 37,
        make: 'Toyota',
        model: 'Highlander',
        year: 2019,
        color: 'Black',
        price: 15000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 38,
        make: 'Honda',
        model: 'Odyssey',
        year: 2018,
        color: 'White',
        price: 20000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 39,
        make: 'Ford',
        model: 'Edge',
        year: 2017,
        color: 'Red',
        price: 18000,
        fuelType: 'Petrol',
        status: 'sold'
    },
    {
        id: 40,
        make: 'BMW',
        model: 'X7',
        year: 2019,
        color: 'Blue',
        price: 30000,
        fuelType: 'Petrol',
        status: 'sold'
    }
];
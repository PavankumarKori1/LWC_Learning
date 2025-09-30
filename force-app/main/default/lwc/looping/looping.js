import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = [ "Hyundai", "Tata", "Maruti", "Mahindra", "Kia", "Toyota", "Honda", "Skoda", "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Jaguar", "Land Rover", "Porsche" ];


    ceoList = [
        {id:1, name:'PawanKumar kori', company:'Pavan Software Solutions'},
        {id:2, name:'Sundar Pichai', company:'Google'},
        {id:3, name:'Satya Nadella', company:'Microsoft'},
        {id:4, name:'Elon Musk', company:'Tesla'},
        {id:5, name:'Tim Cook', company:'Apple'},
        {id:6, name:'Andy Jassy', company:'Amazon'},
        {id:7, name:'Mark Zuckerberg', company:'Meta'},
        {id:8, name:'Shantanu Narayen', company:'Adobe'},
        {id:9, name:'Lisa Su', company:'AMD'},
        {id:10, name:'Jensen Huang', company:'NVIDIA'}
    ]
}
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";
import {useEffect, useState} from "react";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const [meals,setMeals] = useState([])

    useEffect(() => {
        fetch("https://cours-angular-11dba.firebaseio.com/meals.json")
            .then(resp => {return resp.json()})
            .then(meals => {
                let all_meals = []
                for (const m in meals)
                    all_meals.push({
                        id:m,
                        name:meals[m].name,
                        description: meals[m].description,
                        price: meals[m].price,
                    })
                setMeals(all_meals);
            }
        )
    }, []);


    const mealsList = meals.map((meal) => (
        <MealItem
            id={meal.id} // this is new!
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        ></MealItem>
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;

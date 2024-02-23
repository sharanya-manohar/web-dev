import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'iPhone 15 pro max', 
          price: 149999, 
          image: 
'https://m.media-amazon.com/images/I/81Os1SDWpcL._SX522_.jpg'
        },
        { id: 2, 
          name: 'Samsung Galaxy s24 ultra', 
          price: 139999, 
          image: 
'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/b/9/-original-imagx9egaxqpja77.jpeg?q=70&crop=false'
        },
        { id: 3, 
          name: 'Google pixel 8 pro', 
          price: 60999, 
          image: 
'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/g/q/-original-imaggsueh4b26fj7.jpeg?q=70&crop=false'
        },
        { id: 4, 
            name: 'OnePlus 10 pro', 
            price: 66999, 
            image: 
'https://m.media-amazon.com/images/I/418rmVFVCAL._SX300_SY300_QL70_FMwebp_.jpg'
        },
        { id: 5, 
            name: 'Motorola razr 40 Ultra', 
            price: 69999, 
            image: 
'https://m.media-amazon.com/images/I/41dUJO4sQyL._SX300_SY300_QL70_FMwebp_.jpg'
        }
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;
